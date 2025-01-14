from io import BytesIO
import pickle

import lxml.etree as ET
import numpy as np
import spacy
import fitz

from flask_restful import abort

from utils import server_log

disabled_pipelines = ["parser", "ner"]
nlp = spacy.load("en_core_web_sm", disable=disabled_pipelines)
stop_words = nlp.Defaults.stop_words

with open("data/word_model.wv.pkl", "rb") as wv_fh:
    word_model_wv = pickle.load(wv_fh)

filter_tag_list = [
    "sc",
    "italic",
    "xref",
    "label",
    "sub",
    "sup",
    "inline-formula",
    "fig",
    "disp-formula",
    "bold",
    "table-wrap",
    "table",
    "thead",
    "tbody",
    "caption",
    "tr",
    "td",
]

parser = ET.XMLParser(encoding="UTF-8", recover=True)


def text_to_vector(text):
    """
    Parses input plain text and returns a numpy vector based on the
    pre-loaded `word_model_wv`.

    Args:
      * text: plain text string
    """

    tokens = list(
        map(
            lambda x: x.lemma_,
            filter(
                lambda tok: tok.lemma_ in word_model_wv
                and tok.lemma_ not in stop_words,
                nlp(text),
            ),
        )
    )

    num_tokens = len(tokens)
    # Generate error message if no valid tokens are found
    if num_tokens == 0:
         message = "Valid tokens not found in user input"
         server_log(f"{message}\n")
         abort(400, message=message)

    # Calculate the mean of all token vectors and convert it to a vector
    # whose shape is accepted by KNN search function.
    vec = np.zeros(word_model_wv.vector_size)
    for tok in tokens:
        vec += word_model_wv[tok]
    vec = (vec / num_tokens)[np.newaxis, :]

    return vec


def parse_content(content, is_xml=True):
    """
    Parses input content and returns a vector based on the pre-loaded
    `word_model_wv`.

    Args:
      * content: an XML or PDF file's content
      * is_xml: a boolean indicating whether `content` is in XML format
    """

    if is_xml:
        biorxiv_xpath_str = (
            "//abstract/p|//abstract/title|//body/sec//p|//body/sec//title"
        )

        # Parse the xml document
        root = ET.fromstring(content, parser=parser)

        # Process xml without specified tags
        ET.strip_tags(root, *filter_tag_list)
        all_text = root.xpath(biorxiv_xpath_str)
        all_text = list(map(lambda x: "".join(list(x.itertext())), all_text))
        all_text = " ".join(all_text)
    else:
        # Have a faux file stream for parsing
        text_to_process = BytesIO(content)

        # Use this function to write pdf text to the file stream
        pdf_parser = fitz.open(stream=text_to_process, filetype="pdf")

        # Convert PDF content to plain text
        all_text = ""
        for page in pdf_parser:
            all_text += page.getText()

    return text_to_vector(all_text)

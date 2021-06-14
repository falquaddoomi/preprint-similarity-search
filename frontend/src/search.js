import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import * as Sentry from "@sentry/react";
import * as pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry.js";

import { getNeighbors } from "./backend";
import { getNeighborsMetadata } from "./backend";
import { cleanPreprint } from "./backend";
import { cleanNeighbors } from "./backend";

import { loading } from "./status";
import { success } from "./status";

import "./search.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const defaultSearch = "e.g. 10.1101/833400";

// search box component

const Search = ({
  status,
  setStatus,
  setPreprint,
  setSimilarJournals,
  setSimilarPapers,
  setCoordinates,
}) => {
  const [query, setQuery] = useState(getUrl() || defaultSearch); // doi query
  const [text, setText] = useState(""); // search by text
  const uploadRef = useRef(null);

  // on type
  const onChange = useCallback(
    (event) => setQuery(event.target.value.trim()),
    []
  );

  // search by doi
  const searchByDoi = useCallback(
    async (doi, updateUrl = true) => {
      // clean doi
      doi = cleanDoi(doi);

      // update search box with cleaned doi
      setQuery(doi);

      // exit if doi query empty
      if (!doi) return;

      // update url based on search
      if (updateUrl) setUrl(doi);

      // set loading status
      setStatus(loading);

      // get preprint info and neighbor data
      try {
        let { preprint, similarJournals, similarPapers, coordinates } =
          await getNeighbors(doi);
        preprint = cleanPreprint(preprint);
        similarJournals = await getNeighborsMetadata(similarJournals);
        similarPapers = await getNeighborsMetadata(similarPapers);
        similarJournals = cleanNeighbors(similarJournals);
        similarPapers = cleanNeighbors(similarPapers);
        setStatus(success);
        setPreprint(preprint);
        setSimilarJournals(similarJournals);
        setSimilarPapers(similarPapers);
        setCoordinates(coordinates);
      } catch (error) {
        if (error.name !== "CustomError")
          error.message = "Couldn't get results";
        setStatus(error.message);
        setPreprint({});
        setSimilarJournals([]);
        setSimilarPapers([]);
        setCoordinates({});
        Sentry.captureException(error, { tags: { doi } });
      }
    },
    [
      setStatus,
      setPreprint,
      setSimilarJournals,
      setSimilarPapers,
      setCoordinates,
    ]
  );

  // search by text
  useEffect(() => {
    console.log(text);
  }, [text]);

  // when user navigates back/forward
  const onNav = useCallback(() => {
    // get new doi
    const doi = getUrl();
    if (!doi) return;
    // put doi in search box
    setQuery(doi);
    // run search, without updating url since browser does this automatically
    searchByDoi(doi, false);
  }, [searchByDoi]);

  // search for doi in url if any on first load
  useEffect(() => {
    if (getUrl()) searchByDoi(getUrl());
  }, [searchByDoi]);

  // listen for user back/forward nav
  useEffect(() => {
    window.addEventListener("popstate", onNav);
    return () => window.removeEventListener("popstate", onNav);
  }, [onNav, searchByDoi]);

  // on upload
  const onUpload = async ({ target }) => {
    // get uploaded file
    const file = target?.files[0];

    // if pdf
    if (file.type === "application/pdf") {
      const buffer = (await file.arrayBuffer()) || [];

      // reset input so you can upload the same file again
      if (uploadRef.current) uploadRef.current.value = "";

      // get plain text of pdf
      const pdf = await pdfjs.getDocument(buffer).promise;
      let text = "";
      for (let num = 1; num <= pdf.numPages; num++) {
        const page = await pdf.getPage(num);
        const content = await page.getTextContent();
        const items = content.items.map(({ str }) => str).join(" ");
        text += items + "\n";
      }
      setText(text);
    }
    // if txt
    else if (file.type === "text/plain") {
      const text = await file.text();
      setText(text);
    }
  };

  // render
  return (
    <section id="search">
      <p className="center">
        <i>
          Enter the <a href="https://www.biorxiv.org/">bioRxiv</a> or{" "}
          <a href="https://www.medrxiv.org/">medRxiv</a> DOI of your preprint
        </i>
      </p>
      <form
        className="search"
        onSubmit={(event) => {
          // prevent page from navigating away/refreshing on submit
          event.preventDefault();
          // run search
          searchByDoi(query);
        }}
      >
        <input
          className="search_input"
          value={query}
          onChange={onChange}
          type="text"
          placeholder="e.g. 10.1101/833400"
          disabled={status === loading}
          onFocus={({ target }) => target.select()}
        />
        <button
          className="search_button"
          type="submit"
          title="Search for related papers and journals"
          disabled={status === loading}
        >
          <i className="fas fa-search"></i>
        </button>
        <input
          ref={uploadRef}
          type="file"
          onChange={onUpload}
          accept=".txt,text/plain,.pdf,application/pdf"
          style={{ display: "none" }}
        />
        <button
          className="upload_button"
          onClick={(event) => {
            event.preventDefault();
            uploadRef?.current?.click();
          }}
        >
          <i className="fas fa-upload"></i>
        </button>
      </form>
    </section>
  );
};

// clean what user types into search box for convenience
// remove everything before first number, eg "doi:"
// remove version at end, eg "v4"
const cleanDoi = (query) =>
  query.replace(/^\D*/g, "").replace(/v\d+$/g, "").trim();

// get doi from url
const getUrl = () =>
  new URLSearchParams(window.location.search.substring(1)).get("doi");

// put doi in url as param
const setUrl = (doi) => {
  const oldUrl = window.location.href;
  const base = window.location.href.split(/[?#]/)[0];
  const newUrl = base + "?doi=" + doi;
  // compare old to new url to prevent duplicate history entries when refreshing
  if (oldUrl !== newUrl) window.history.pushState(null, null, newUrl);
};

export default Search;

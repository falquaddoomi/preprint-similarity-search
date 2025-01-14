#!/bin/bash

# Exit immediately if any error happens
set -e

# Make `gcloud` and `gsutil` commands available when run as a cron job
PATH=/snap/bin:$PATH

SCRIPT_DIR=$(dirname $(readlink -e $0))

# Create directory and symbolic links for current run
echo -e "\n$(date +"%F %X"): Creating directories for new run ..."
DATE_STR=$(date -I)
cd ${SCRIPT_DIR}/data/
mkdir -p ${DATE_STR}
ln -sf ${DATE_STR} current_run

# Go to current run's data dir and create sub-dirs
cd ${DATE_STR}
mkdir -p input output

# Create symbolic links as input files for current run
if [ ! -e ../last_run/output ]; then
    echo "Error: ouput files in last_run not found"
    exit 1
fi

LAST_OUTPUT_DIR=$(readlink -e ../last_run/output)
ln -sf ${LAST_OUTPUT_DIR}/embeddings_full.tsv ./input
ln -sf ${LAST_OUTPUT_DIR}/global_token_counts.tsv ./input
ln -sf ${LAST_OUTPUT_DIR}/pmc_oa_file_list.tsv ./input
ln -sf ${LAST_OUTPUT_DIR}/pmc_tsne_square.tsv ./input

# Run auto-updater's main module inside a virtual env
source $HOME/venv/auto-updater/bin/activate
cd ${SCRIPT_DIR}

echo -e "\n$(date +"%F %X"): Running main.py ..."
python3 ./main.py

# Run a few tests to confirm the outputs
echo -e "$(date +"%F %X"): Running tests ..."

# Build symbolic links so that tests can use deployment data in `current_run`:
ln -sf ${SCRIPT_DIR}/data/static/word_model.wv.pkl ${SCRIPT_DIR}/data/current_run/output/deployment/
ln -sf ${SCRIPT_DIR}/data/current_run/output/deployment ${SCRIPT_DIR}/../server/data

# Invoke tests
cd ../server
./tests.py ${SCRIPT_DIR}/data/current_run/output/embeddings_full.tsv

# Remove symbolic links that were created for test only
rm -f ${SCRIPT_DIR}/../server/data
rm -f ${SCRIPT_DIR}/data/current_run/output/deployment/word_model.wv.pkl
echo -e "$(date +"%F %X"): Tests passed\n"

# Back up some output files to Google Cloud bucket
echo "$(date +"%F %X"): Create output tarball file ..."
cd ${SCRIPT_DIR}/data/current_run
tar czvf ${DATE_STR}.tgz output/*.tsv output/*.json

echo -e "\n$(date +"%F %X"): Copy output tarball file to Google Cloud Bucket ..."
gsutil -q cp ${DATE_STR}.tgz gs://preprint-similarity-search/auto-updater/
rm -f ${DATE_STR}.tgz

# Copy deployment files to Google Cloud bucket
echo -e "\n$(date +"%F %X"): Copy deployment files to Google Cloud Bucket ..."
gsutil -q cp -r output/deployment gs://preprint-similarity-search/server_data/${DATE_STR}
echo ${DATE_STR} > version.txt
gsutil -q cp version.txt gs://preprint-similarity-search/server_data/
rm -f version.txt

# Reset symbolic links
cd ${SCRIPT_DIR}/data
rm -f last_run current_run
ln -s ${DATE_STR} last_run

# Delete data files that are older than 45 days
echo -e "\n$(date +"%F %X"): Clean up old files"
find ${SCRIPT_DIR}/data/ -type d -name "20*" -ctime +45 | xargs rm -rf

# Shut down itself
echo -e "\n$(date +"%F %X"): Done\n"
sudo /usr/sbin/init 0

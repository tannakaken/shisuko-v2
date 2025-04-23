#!/bin/bash

cd theme-shisuko
npm install
npm run build:scss
ls
cd ..
npm install
npm run build

res=`curl -L --verbose -H "Accept: application/vnd.github+json" -H "Authorization: token $GITHUB_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" -X POST "https://api.github.com/repos/${GITHUB_REPOSITORY}/releases" -d "
{
  \"tag_name\": \"v$CURRENT_DATETIME\",
  \"target_commitish\": \"$GITHUB_SHA\",
  \"name\": \"v$CURRENT_DATETIME\",
  \"draft\": false,
  \"prerelease\": false
}"`

# extract asset url
upload_url=`echo ${res} | python3 -c 'import json,sys;print(json.load(sys.stdin)["upload_url"])'`
PDF_FILENAME="詩晒古_第二号.pdf"
upload_url="${upload_url%%\{*}?name=${CURRENT_DATETIME}.pdf" # upload_url は 最後に{?name,label} のような文字列がつくため、bashの機能で整形する。

# upload built pdf to release assets
curl -L --verbose -H "Accept: application/vnd.github+json" -H "Authorization: token $GITHUB_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" -H 'Content-Type: application/pdf' -X POST "${upload_url}" --upload-file "${PDF_FILENAME}"
#!/bin/sh

cd theme-shisuko
npm install
npm run build:scss
cd ..
npm install
npm run build

res=`curl -L --verbose -H "Accept: application/vnd.github+json" -H "Authorization: token $GITHUB_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" -X POST "https://api.github.com/repos/${GITHUB_REPOSITORY}/releases" -d "
{
  \"tag_name\": \"v$GITHUB_SHA\",
  \"target_commitish\": \"$GITHUB_SHA\",
  \"name\": \"v$GITHUB_SHA\",
  \"draft\": false,
  \"prerelease\": false
}"`

# extract asset url
assets_url=`echo ${res} | python3 -c 'import json,sys;print(json.load(sys.stdin)["assets_url"])'`

# upload built pdf to release assets
curl -L --verbose -H "Accept: application/vnd.github+json" -H "Authorization: token $GITHUB_TOKEN" -H "X-GitHub-Api-Version: 2022-11-28" -H 'Content-Type: application/pdf' -X POST "${assets_url}?name=詩晒古_第二号.pdf" --upload-file '詩晒古_第二号.pdf'
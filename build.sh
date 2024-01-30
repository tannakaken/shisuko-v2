#!/bin/sh

cd theme-shisuko
npm install
npm run build:scss
cd ..
sudo npm install
npm run build


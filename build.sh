#!/bin/sh

cd theme-shisuko
npm install
npm run build:scss
cd ..
npm install
sudo npm run build


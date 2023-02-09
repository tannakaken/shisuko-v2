#!/bin/sh

cd theme-shisuko
sudo npm install
npm run build:scss
cd ..
sudo npm install
npm run build


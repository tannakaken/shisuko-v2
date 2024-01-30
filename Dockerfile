FROM node:16-slim
WORKDIR /app

RUN apt-get update && apt-get install -y \
  git \
  curl \
  build-essential \
  libgtk2.0 \
  libnss3-dev \
  libatk-bridge2.0-0 \
  libdrm-dev \
  libxkbcommon-dev \
  libgbm-dev \
  libasound-dev \
  fonts-ipaexfont \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY package.json .
COPY package-lock.json .
RUN mkdir /theme-shisuko
COPY theme-shisuko/package.json /theme-shisuko
COPY theme-shisuko/package-lock.json /theme-shisuko
COPY build.sh .

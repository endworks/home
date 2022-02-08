FROM node:alpine AS builder

LABEL org.opencontainers.image.source https://github.com/endworks/home

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn --frozen-lockfile

EXPOSE 8080

CMD ["yarn", "prod"]
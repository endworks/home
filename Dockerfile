FROM node:alpine AS builder

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY . .

RUN yarn --frozen-lockfile
RUN yarn prod:build

FROM node:alpine AS release

LABEL org.opencontainers.image.source https://github.com/endworks/home

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build /usr/src/app/build/
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules/
COPY package.json ./

EXPOSE 8080

CMD ["yarn", "prod:start"]
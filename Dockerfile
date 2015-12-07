FROM quay.io/trunk/alpine-node-kubernetes:5.1

ENV NODE_ENV production
ENV HOME /app

WORKDIR /app

COPY rootfs /
COPY package.json package.json
COPY src src

RUN npm install
FROM quay.io/trunk/docker-alpine-node-kubernetes

ENV NODE_ENV production
ENV HOME /app

WORKDIR /app

COPY rootfs /
COPY package.json /app/package.json
COPY src app/src

RUN npm installs
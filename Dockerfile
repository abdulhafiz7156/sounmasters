### STAGE Init: Base ###
#FROM node:20-alpine3.20 as base
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS base
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /app

### STAGE 1: Build ###
FROM base AS build

COPY --link package.json package-lock.json ./
RUN npm install --production=false
COPY --link . .
RUN npm run build
RUN npm prune

### STAGE 2: Run ###
FROM base

ENV PORT=$PORT
COPY --from=build /app/.output /app/.output
CMD [ "node", ".output/server/index.mjs" ]

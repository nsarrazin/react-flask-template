FROM node:lts-alpine as build

WORKDIR /web

COPY web/package.json package.json
RUN npm install

COPY web/src src/
COPY web/public public/
RUN npm run build 


FROM nginx:alpine as deploy
COPY --from=0 /web/build/ /usr/share/nginx/html/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
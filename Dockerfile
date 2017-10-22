FROM node:8.7.0
MAINTAINER mlabouardy <mohamed@labouardy.com>

WORKDIR /app

RUN npm install mysql

COPY server.js .

CMD node server.js

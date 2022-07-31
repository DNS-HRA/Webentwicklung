FROM node:latest

EXPOSE 8081

WORKDIR /usr/src/app

COPY / /usr/src/app/

ENV NODE_ENV production

RUN npm update

CMD ["node", "server.mjs"]
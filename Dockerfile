FROM node:latest

ENV NODE_ENV development

COPY . .

RUN yarn add

CMD node bin/www

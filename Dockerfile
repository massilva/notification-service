FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm i @nestjs/cli
RUN npm i @prisma/client
RUN npm i class-validator class-transformer
RUN npm i @nestjs/microservices
RUN npm i @nestjs/config
RUN npm i kafkajs

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ /usr/src/app

CMD ["npm","start"]

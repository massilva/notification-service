FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm i @nestjs/cli
RUN npm i @prisma/client
RUN npm i class-validator class-transformer

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ /usr/src/app

CMD ["npm","start"]

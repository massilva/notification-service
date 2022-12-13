FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ /usr/src/app

CMD ["npm","start"]

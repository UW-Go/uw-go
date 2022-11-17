FROM node:lts-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --only-prod --force

COPY ./src ./src

COPY ./public ./public

COPY .gitignore .

COPY tsconfig.json .

EXPOSE 3000

RUN node node_modules/react-scripts/bin/react-scripts.js start
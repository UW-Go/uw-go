FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json tsconfig.json ./  
COPY ./src ./src
COPY ./public ./public

RUN npm install --only-prod --force

EXPOSE 3000

CMD ["npm", "start"]
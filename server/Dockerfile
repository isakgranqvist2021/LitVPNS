FROM node:18-alpine3.15

WORKDIR /app

COPY src src
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json .
COPY views views
COPY public public

RUN npm ci
RUN npm install
RUN npm run build

RUN rm -rf src
RUN rm tsconfig.json

EXPOSE 80
CMD [ "npm", "start" ]  
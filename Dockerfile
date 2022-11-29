# Stage 1 Development
FROM node:14 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm cache clean --force && npm cache verify

RUN npm install --legacy-peer-deps

ADD . /usr/src/app

RUN npm run build

RUN npm i -g npm@latest

# Stage 2 Production
FROM node:14 as production

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/scripts ./src/scripts

COPY --from=development /usr/src/app/build ./build

COPY --from=development /usr/src/app/package*.json ./

RUN npm install --omit=dev --legacy-peer-deps

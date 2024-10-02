FROM node:alpine as dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM node:alpine
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build
CMD ["npm", "run", "serve:ssr:my-app"]
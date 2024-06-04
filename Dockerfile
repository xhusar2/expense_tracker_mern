FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm install cors

EXPOSE 5000

CMD ["node", "server.js"]

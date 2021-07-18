FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

Expose 3000

CMD ["npm", "start"]

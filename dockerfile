FROM node:latest
ENV PORT 3000

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app

EXPOSE 3000
CMD [ "node", "server.js" ]
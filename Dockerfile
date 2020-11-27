FROM node:14.1.0-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY dist/apps/api/main.js /usr/src/app
EXPOSE 3000
RUN npm install --production
CMD [ "node", "/usr/src/app/main.js" ]
FROM nginx:latest
MAINTAINER Aniket Yadav 
COPY dist/transaction-page /usr/share/nginx/html
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "ng", "build" ]
FROM nginx:latest
MAINTAINER Aniket Yadav 
COPY dist/transaction-page /usr/share/nginx/html
COPY package*.json ./

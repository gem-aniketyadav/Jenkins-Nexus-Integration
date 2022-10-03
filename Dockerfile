FROM node:latest
WORKDIR /
COPY --from=node /app/dist/Transaction-app /usr/share/nginx/html
COPY package*.json ./
RUN npm install
RUN npm run build --prod
COPY . .
EXPOSE 3000
CMD [ "npm", "index.html" ]
FROM node:latest
WORKDIR /
COPY --from=node /app/dist/Transaction-app /usr/share/nginx/html
RUN npm install
RUN npm run build --prod
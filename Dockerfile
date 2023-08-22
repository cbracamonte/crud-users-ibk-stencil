# Stage 1: Build
FROM node:16-alpine AS build
WORKDIR /usr/src/microfrontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:latest
COPY --from=build /usr/src/microfrontend/www /usr/share/nginx/html
COPY --from=build /usr/src/microfrontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3333

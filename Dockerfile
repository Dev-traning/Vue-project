FROM node:lts-alpine as build-stage
WORKDIR /home/dimpy/Documents/Docker/maf
COPY package*.json ./
RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN npm install -g @vue/cli
RUN npm install
COPY . .

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /home/dimpy/Documents/Docker/maf/dist /usr/share/nginx/html>
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



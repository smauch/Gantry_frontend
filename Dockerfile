### STAGE 1: Build ###
FROM node:current-alpine AS build
WORKDIR /src/app
RUN npm -v
RUN npm cache clean -f
COPY package.json ./
RUN npm install --no-package-lock
RUN npm install -g @angular/cli@latest
COPY . .
RUN ./node_modules/.bin/ng build  --prod
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /src/app/dist/dunkermotoren-messemodel /usr/share/nginx/html
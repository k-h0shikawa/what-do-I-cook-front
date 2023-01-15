FROM node
RUN npm install -g @angular/cli
WORKDIR /angular
EXPOSE 4200

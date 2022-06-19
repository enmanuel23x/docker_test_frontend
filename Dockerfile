FROM node:14-alpine as base

WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g serve

# add app
COPY . .

ARG REACT_APP_API_URL=http://localhost:2000

RUN npm run build

EXPOSE 3000

# start app
CMD ["serve", "-p", "3000", "build"]

#docker build -t frontend:latest .
#docker run -p 3000:3000 -d frontend:latest
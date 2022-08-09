# syntax = docker/dockerfile:1.2

FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Open a port for the running application to listen on
EXPOSE 80

# Start the application
CMD /bin/bash -c 'bash ./start.sh'

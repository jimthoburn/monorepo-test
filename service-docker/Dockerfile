# https://hub.docker.com/_/debian/

FROM debian:bullseye-slim

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Start the application
CMD /bin/bash -c 'bash ./start.sh'

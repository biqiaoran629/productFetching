# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Set the working directory to /src
WORKDIR /api

# copy package.json into the container at /src
COPY package*.json /api/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY server.js /api

COPY ./src /api/src

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
CMD ["node", "server.js"]
# Use Node.js 20 with Alpine Linux as the base image
FROM node:20-alpine
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json (if available)
COPY package*.json ./
# Install project dependencies
RUN npm install 
RUN npm install express
# Copy the rest of the application files
COPY . .
# Expose the port that the application will run on
EXPOSE 3000
# Define the command to start the application
CMD ["npm","start"]
# Use the official Node.js image as the base image
FROM node:21

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Command to run the app
#CMD ["serve", "-s", "build"]
CMD ["node", "server.js"]
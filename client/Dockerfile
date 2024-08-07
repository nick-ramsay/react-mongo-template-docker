# Use the official Node.js image as the base image
FROM node:21

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn install

# Install datadog-ci tool
RUN yarn global add @datadog/datadog-ci

# Expose port 3000
EXPOSE 3000

# Command to run the app
#CMD ["serve", "-s", "build"]
CMD sh -c "yarn start"
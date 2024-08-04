# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on (container)
EXPOSE 3002

# Start the Next.js app
# CMD ["npm", "run", "start"]

# For dev mode
CMD ["npm", "run", "dev"]

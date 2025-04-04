# Use Node.js to build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight image to serve the app
FROM node:18-alpine

WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app /app

# Expose Next.js default port (3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]


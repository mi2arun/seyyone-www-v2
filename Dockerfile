# 🐳 Simple Docker Setup for Seyyone Website
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Copy static assets to standalone build
RUN cp -r public .next/standalone/ && \
    cp -r .next/static .next/standalone/.next/

# Switch to standalone directory for execution
WORKDIR /app/.next/standalone

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start the application
CMD ["node", "server.js"]
#!/bin/bash

# Seyyone Website - Production Startup Script

echo "🚀 Starting Seyyone Website in Production Mode..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Option 1: Run with Node.js directly (simple)
run_with_node() {
    echo "Starting with Node.js..."
    cd .next/standalone
    NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 node server.js
}

# Option 2: Run with PM2 (recommended for production)
run_with_pm2() {
    echo "Starting with PM2..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        echo "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    # Stop existing instance if running
    pm2 stop seyyone-website 2>/dev/null || true
    pm2 delete seyyone-website 2>/dev/null || true
    
    # Start with PM2
    pm2 start ecosystem.config.js --env production
    
    # Save PM2 configuration
    pm2 save
    
    # Show status
    pm2 status
    
    echo "✅ Application started successfully!"
    echo "📊 View logs: pm2 logs seyyone-website"
    echo "📈 Monitor: pm2 monit"
    echo "🔄 Restart: pm2 restart seyyone-website"
    echo "🛑 Stop: pm2 stop seyyone-website"
}

# Option 3: Run with Docker
run_with_docker() {
    echo "Building and running with Docker..."
    docker build -t seyyone-website .
    docker run -d -p 3000:3000 --name seyyone-website seyyone-website
    echo "✅ Docker container started!"
    echo "📊 View logs: docker logs seyyone-website"
    echo "🛑 Stop: docker stop seyyone-website"
}

# Check command line argument
case "$1" in
    node)
        run_with_node
        ;;
    pm2)
        run_with_pm2
        ;;
    docker)
        run_with_docker
        ;;
    *)
        echo "Usage: $0 {node|pm2|docker}"
        echo ""
        echo "Options:"
        echo "  node   - Run directly with Node.js (simple)"
        echo "  pm2    - Run with PM2 process manager (recommended)"
        echo "  docker - Run with Docker container"
        echo ""
        echo "Example: ./start-production.sh pm2"
        exit 1
        ;;
esac
#!/bin/bash

# 🔧 Quick Docker Compose Compatibility Fix

echo "🔍 Checking Docker and Docker Compose versions..."

# Check Docker version
if command -v docker &> /dev/null; then
    echo "Docker version:"
    docker --version
else
    echo "❌ Docker not found!"
    exit 1
fi

echo ""

# Check Docker Compose versions
echo "Docker Compose compatibility check:"

if command -v docker-compose &> /dev/null; then
    echo "✅ docker-compose (legacy) found:"
    docker-compose --version
    COMPOSE_CMD="docker-compose"
elif docker compose version &> /dev/null 2>&1; then
    echo "✅ docker compose (new) found:"
    docker compose version
    COMPOSE_CMD="docker compose"
else
    echo "❌ No Docker Compose found!"
    echo ""
    echo "📦 Installing docker-compose..."
    sudo apt update
    sudo apt install docker-compose -y
    COMPOSE_CMD="docker-compose"
fi

echo ""
echo "🚀 Using command: $COMPOSE_CMD"

# Test the compose file
echo ""
echo "🧪 Testing docker-compose.yml..."
$COMPOSE_CMD config > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ docker-compose.yml is valid"
else
    echo "❌ docker-compose.yml has issues"
    $COMPOSE_CMD config
fi

echo ""
echo "🔧 Quick deployment test:"
echo "   $COMPOSE_CMD up -d"
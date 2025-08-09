#!/bin/bash

# 🚀 Complete Production Deployment Script
# Deploys Next.js to Docker + configures host Apache2 + Let's Encrypt

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if running as root
check_permissions() {
    if [[ $EUID -eq 0 ]]; then
        print_error "Don't run this script as root!"
        print_status "Run as regular user with sudo privileges"
        exit 1
    fi
}

# Deploy Docker Next.js app
deploy_nextjs() {
    print_status "🐳 Deploying Next.js Docker container..."
    
    # Stop existing Apache container if running
    if docker ps | grep -q seyyone-apache; then
        print_status "Stopping Docker Apache container..."
        docker compose down apache 2>/dev/null || true
    fi
    
    # Deploy Next.js container only
    docker compose up -d nextjs-app
    
    # Wait for health check
    print_status "Waiting for Next.js app to be healthy..."
    sleep 10
    
    # Test Next.js directly
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
        print_success "Next.js app is running and healthy!"
    else
        print_error "Next.js app health check failed!"
        print_status "Check logs: docker compose logs nextjs-app"
        exit 1
    fi
}

# Setup host Apache2 if not already configured
setup_host_apache() {
    print_status "🌐 Checking Apache2 configuration..."
    
    if [ ! -f /etc/apache2/sites-available/seyyone.conf ]; then
        print_warning "Apache2 not configured yet."
        print_status "Run the Apache setup script: ./setup-apache-host.sh"
        read -p "Would you like to run Apache setup now? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            ./setup-apache-host.sh
        else
            print_warning "Skipping Apache setup. Remember to configure it later."
            return
        fi
    else
        print_success "Apache2 already configured!"
        
        # Restart Apache to ensure it's running
        sudo systemctl restart apache2
        
        if sudo systemctl is-active --quiet apache2; then
            print_success "Apache2 is running!"
        else
            print_error "Apache2 failed to start!"
            exit 1
        fi
    fi
}

# Test full setup
test_deployment() {
    print_status "🧪 Testing full deployment..."
    
    # Test Docker Next.js
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
        print_success "✅ Docker Next.js: Working"
    else
        print_error "❌ Docker Next.js: Failed"
    fi
    
    # Test Apache2 if configured
    if [ -f /etc/apache2/sites-available/seyyone.conf ]; then
        # Get domain from Apache config
        DOMAIN=$(grep "ServerName" /etc/apache2/sites-available/seyyone.conf | head -1 | awk '{print $2}')
        
        if [ "$DOMAIN" != "yourdomain.com" ] && [ -n "$DOMAIN" ]; then
            print_status "Testing Apache2 proxy for $DOMAIN..."
            
            # Test HTTP
            if curl -s -o /dev/null -w "%{http_code}" -H "Host: $DOMAIN" http://localhost | grep -q "200\|301\|302"; then
                print_success "✅ Apache2 HTTP: Working"
            else
                print_warning "⚠️  Apache2 HTTP: Check configuration"
            fi
            
            # Test HTTPS if certificate exists
            if sudo certbot certificates | grep -q "$DOMAIN"; then
                if curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep -q "200"; then
                    print_success "✅ Apache2 HTTPS: Working"
                else
                    print_warning "⚠️  Apache2 HTTPS: Check configuration"
                fi
            else
                print_warning "⚠️  SSL Certificate: Not found or not configured"
            fi
        fi
    fi
}

# Show deployment status
show_status() {
    print_success "🎉 Production Deployment Status"
    echo ""
    
    # Docker status
    echo "🐳 Docker Services:"
    docker compose ps
    echo ""
    
    # Apache status
    if command -v apache2 &> /dev/null; then
        echo "🌐 Apache2 Status:"
        sudo systemctl status apache2 --no-pager --lines=3
        echo ""
    fi
    
    # SSL certificate status
    if command -v certbot &> /dev/null; then
        echo "🔒 SSL Certificates:"
        sudo certbot certificates 2>/dev/null || echo "No certificates found"
        echo ""
    fi
    
    echo "📝 Useful Commands:"
    echo "  • View Next.js logs:    docker compose logs -f nextjs-app"
    echo "  • Restart Next.js:      docker compose restart nextjs-app"
    echo "  • View Apache logs:     sudo tail -f /var/log/apache2/seyyone_*.log"
    echo "  • Restart Apache:       sudo systemctl restart apache2"
    echo "  • Check SSL renewal:    sudo certbot renew --dry-run"
    echo "  • Update deployment:    ./deploy-production.sh"
    echo ""
    
    # Website URLs
    if [ -f /etc/apache2/sites-available/seyyone.conf ]; then
        DOMAIN=$(grep "ServerName" /etc/apache2/sites-available/seyyone.conf | head -1 | awk '{print $2}')
        if [ "$DOMAIN" != "yourdomain.com" ] && [ -n "$DOMAIN" ]; then
            echo "🌐 Website URLs:"
            echo "  • https://$DOMAIN"
            echo "  • https://www.$DOMAIN"
            echo "  • Direct Next.js: http://localhost:3000"
        fi
    fi
}

# Main execution
main() {
    print_status "🚀 Starting Production Deployment..."
    echo ""
    
    check_permissions
    deploy_nextjs
    setup_host_apache
    test_deployment
    
    echo ""
    show_status
    
    print_success "✅ Production deployment completed!"
}

# Run main function
main "$@"
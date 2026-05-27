#!/bin/bash

# 🚀 Host Apache2 + Let's Encrypt Setup for Seyyone Website
# Run this script on your production server

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

# Configuration
DOMAIN=""
EMAIL=""

# Function to get domain and email
get_config() {
    if [ -z "$DOMAIN" ]; then
        echo ""
        print_status "🌐 Apache2 + Let's Encrypt Setup for Seyyone Website"
        echo ""
        read -p "Enter your domain name (e.g., seyyone.com): " DOMAIN
        read -p "Enter your email for Let's Encrypt: " EMAIL
        
        if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
            print_error "Domain and email are required!"
            exit 1
        fi
    fi
}

# Update system
update_system() {
    print_status "Updating system packages..."
    sudo apt update
    sudo apt upgrade -y
    print_success "System updated successfully!"
}

# Install Apache2 and SSL tools
install_apache() {
    print_status "Installing Apache2 and SSL tools..."
    
    sudo apt install -y apache2 certbot python3-certbot-apache
    
    # Enable required modules
    sudo a2enmod proxy
    sudo a2enmod proxy_http
    sudo a2enmod headers
    sudo a2enmod ssl
    sudo a2enmod rewrite
    sudo a2enmod expires
    sudo a2enmod deflate
    
    print_success "Apache2 and modules installed!"
}

# Configure virtual host
setup_vhost() {
    print_status "Setting up virtual host for $DOMAIN..."
    
    # Create virtual host configuration
    sudo tee /etc/apache2/sites-available/seyyone.conf > /dev/null <<EOF
# 🌐 Seyyone Website - Apache2 Virtual Host Configuration

# HTTP Virtual Host (redirects to HTTPS)
<VirtualHost *:80>
    ServerName $DOMAIN
    ServerAlias www.$DOMAIN
    
    # Redirect all HTTP to HTTPS (after SSL setup)
    # RewriteEngine On
    # RewriteCond %{HTTPS} off
    # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
    
    # Temporary HTTP configuration for Let's Encrypt verification
    DocumentRoot /var/www/html
    
    # Reverse Proxy to Docker Next.js App (temporary for testing)
    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass /.well-known/ !
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    # Let's Encrypt challenge directory
    Alias /.well-known/acme-challenge/ /var/www/html/.well-known/acme-challenge/
    <Directory "/var/www/html/.well-known/acme-challenge/">
        Options None
        AllowOverride None
        Require all granted
    </Directory>
    
    ErrorLog \${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog \${APACHE_LOG_DIR}/seyyone_access.log combined
</VirtualHost>

# HTTPS Virtual Host (will be configured after SSL certificate)
# <VirtualHost *:443>
#     ServerName $DOMAIN
#     ServerAlias www.$DOMAIN
#     
#     # SSL Configuration (Let's Encrypt will add these)
#     SSLEngine on
#     
#     # Security Headers
#     Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
#     Header always set X-Frame-Options SAMEORIGIN
#     Header always set X-Content-Type-Options nosniff
#     Header always set X-XSS-Protection "1; mode=block"
#     Header always set Referrer-Policy "strict-origin-when-cross-origin"
#     
#     # Reverse Proxy to Docker Next.js App
#     ProxyPreserveHost On
#     ProxyRequests Off
#     ProxyPass / http://127.0.0.1:3000/
#     ProxyPassReverse / http://127.0.0.1:3000/
#     
#     # Static Assets Caching
#     <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
#         ExpiresActive On
#         ExpiresDefault "access plus 1 month"
#         Header set Cache-Control "public, max-age=2592000"
#     </LocationMatch>
#     
#     ErrorLog \${APACHE_LOG_DIR}/seyyone_error.log
#     CustomLog \${APACHE_LOG_DIR}/seyyone_access.log combined
# </VirtualHost>
EOF
    
    # Enable site and disable default
    sudo a2ensite seyyone.conf
    sudo a2dissite 000-default.conf
    
    # Test configuration
    sudo apache2ctl configtest
    
    # Reload Apache
    sudo systemctl reload apache2
    
    print_success "Virtual host configured!"
}

# Get SSL certificate
setup_ssl() {
    print_status "Setting up Let's Encrypt SSL certificate..."
    
    # Ensure Apache is running
    sudo systemctl start apache2
    sudo systemctl enable apache2
    
    print_warning "Make sure your domain $DOMAIN points to this server's IP address!"
    read -p "Press Enter when your DNS is configured and ready..."
    
    # Get SSL certificate
    sudo certbot --apache -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --non-interactive
    
    if [ $? -eq 0 ]; then
        print_success "SSL certificate installed successfully!"
        
        # Set up auto-renewal
        sudo crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -
        
        print_success "Auto-renewal configured!"
    else
        print_error "SSL certificate installation failed!"
        print_warning "You can run: sudo certbot --apache -d $DOMAIN -d www.$DOMAIN"
    fi
}

# Test configuration
test_setup() {
    print_status "Testing configuration..."
    
    # Test Apache status
    if sudo systemctl is-active --quiet apache2; then
        print_success "Apache2 is running!"
    else
        print_error "Apache2 is not running!"
        return 1
    fi
    
    # Test SSL certificate
    if sudo certbot certificates | grep -q "$DOMAIN"; then
        print_success "SSL certificate is installed!"
    else
        print_warning "SSL certificate check failed or not found"
    fi
    
    print_status "Testing website accessibility..."
    if curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN | grep -q "200\|301\|302"; then
        print_success "Website is accessible via HTTP!"
    else
        print_warning "Website HTTP test failed"
    fi
    
    if curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep -q "200"; then
        print_success "Website is accessible via HTTPS!"
    else
        print_warning "Website HTTPS test failed"
    fi
}

# Show final information
show_info() {
    print_success "🎉 Setup Complete!"
    echo ""
    echo "📊 Configuration Summary:"
    echo "  • Domain: $DOMAIN"
    echo "  • SSL: Let's Encrypt (auto-renewal enabled)"
    echo "  • Apache Config: /etc/apache2/sites-available/seyyone.conf"
    echo "  • Logs: /var/log/apache2/seyyone_*.log"
    echo ""
    echo "🌐 Your website should be accessible at:"
    echo "  • https://$DOMAIN"
    echo "  • https://www.$DOMAIN"
    echo ""
    echo "📝 Useful Commands:"
    echo "  • Restart Apache: sudo systemctl restart apache2"
    echo "  • Check SSL: sudo certbot certificates"
    echo "  • Renew SSL: sudo certbot renew"
    echo "  • View logs: sudo tail -f /var/log/apache2/seyyone_*.log"
    echo ""
    echo "🔄 Next Steps:"
    echo "  1. Make sure your Docker Next.js app is running on port 3000"
    echo "  2. Test your website: curl -I https://$DOMAIN"
    echo "  3. Monitor logs for any issues"
}

# Main execution
main() {
    print_status "🚀 Starting Apache2 + Let's Encrypt setup..."
    
    get_config
    update_system
    install_apache
    setup_vhost
    
    print_warning "Ready to setup SSL certificate for $DOMAIN"
    read -p "Continue with SSL setup? (y/n): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        setup_ssl
    else
        print_warning "SSL setup skipped. Run manually: sudo certbot --apache -d $DOMAIN -d www.$DOMAIN"
    fi
    
    test_setup
    show_info
    
    print_success "✅ Apache2 + Let's Encrypt setup completed!"
}

# Run main function
main "$@"
#!/bin/bash

# 🌐 Apache2 Reverse Proxy Setup Script for Seyyone Website
# Run this script on your server after copying the project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Apache2 Reverse Proxy Setup for Seyyone Website${NC}"
echo "=================================================="

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   echo -e "${RED}❌ This script should not be run as root${NC}"
   echo "Please run as a regular user with sudo privileges"
   exit 1
fi

# Get domain name from user
read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME
read -p "Enter your email for SSL certificate: " EMAIL

if [[ -z "$DOMAIN_NAME" ]]; then
    echo -e "${RED}❌ Domain name is required${NC}"
    exit 1
fi

echo -e "${YELLOW}🔧 Step 1: Enabling Apache2 modules...${NC}"
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
sudo a2enmod headers
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2enmod expires
sudo a2enmod deflate

echo -e "${YELLOW}🔧 Step 2: Creating virtual host configuration...${NC}"

# Create the Apache virtual host file
sudo tee /etc/apache2/sites-available/seyyone.conf > /dev/null << EOF
# HTTP Virtual Host (Redirect to HTTPS)
<VirtualHost *:80>
    ServerName $DOMAIN_NAME
    ServerAlias www.$DOMAIN_NAME
    
    DocumentRoot /var/www/html
    
    # Logging
    ErrorLog \${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog \${APACHE_LOG_DIR}/seyyone_access.log combined
    
    # Temporary proxy configuration (will be updated after SSL)
    ProxyPreserveHost On
    ProxyRequests Off
    
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # Set headers
    Header always set X-Forwarded-Proto "http"
    Header always set X-Forwarded-For %h
</VirtualHost>
EOF

echo -e "${YELLOW}🔧 Step 3: Enabling the site...${NC}"
sudo a2ensite seyyone.conf

# Disable default site
sudo a2dissite 000-default 2>/dev/null || true

# Test Apache configuration
echo -e "${YELLOW}🔧 Step 4: Testing Apache configuration...${NC}"
sudo apache2ctl configtest

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Apache configuration test passed${NC}"
    sudo systemctl reload apache2
else
    echo -e "${RED}❌ Apache configuration test failed${NC}"
    exit 1
fi

# Check if Next.js is running
echo -e "${YELLOW}🔧 Step 5: Checking Next.js application...${NC}"
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✅ Next.js application is running on port 3000${NC}"
else
    echo -e "${RED}❌ Next.js application is not running on port 3000${NC}"
    echo "Please start your Next.js application first:"
    echo "  pm2 start ecosystem.config.js --env production"
    echo "  # or"
    echo "  ./start-production.sh pm2"
    exit 1
fi

# Install Certbot for SSL
echo -e "${YELLOW}🔧 Step 6: Installing Certbot for SSL...${NC}"
sudo apt update
sudo apt install -y certbot python3-certbot-apache

# Get SSL certificate
if [[ ! -z "$EMAIL" ]]; then
    echo -e "${YELLOW}🔒 Step 7: Getting SSL certificate...${NC}"
    sudo certbot --apache -d $DOMAIN_NAME -d www.$DOMAIN_NAME --email $EMAIL --agree-tos --non-interactive
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ SSL certificate obtained successfully${NC}"
        
        # Update the virtual host for production with security headers
        sudo tee /etc/apache2/sites-available/seyyone.conf > /dev/null << EOF
# HTTP Virtual Host (Redirect to HTTPS)
<VirtualHost *:80>
    ServerName $DOMAIN_NAME
    ServerAlias www.$DOMAIN_NAME
    
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
    
    ErrorLog \${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog \${APACHE_LOG_DIR}/seyyone_access.log combined
</VirtualHost>

# HTTPS Virtual Host (Main Configuration)
<VirtualHost *:443>
    ServerName $DOMAIN_NAME
    ServerAlias www.$DOMAIN_NAME
    
    DocumentRoot /var/www/html
    
    # SSL Configuration (managed by Certbot)
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/$DOMAIN_NAME/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/$DOMAIN_NAME/privkey.pem
    
    # Security Headers
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Logging
    ErrorLog \${APACHE_LOG_DIR}/seyyone_ssl_error.log
    CustomLog \${APACHE_LOG_DIR}/seyyone_ssl_access.log combined
    
    # Proxy Configuration
    ProxyPreserveHost On
    ProxyRequests Off
    
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # Set proper headers
    Header always set X-Forwarded-Proto "https"
    Header always set X-Forwarded-For %h
    RequestHeader set X-Forwarded-Proto "https"
    
    # Cache static assets
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
        Header append Cache-Control "public, immutable"
    </LocationMatch>
    
    # Next.js static assets
    <Location "/_next/static/">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
        Header append Cache-Control "public, immutable"
    </Location>
    
    # Compression
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png|ico|woff|woff2)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>
</VirtualHost>
EOF

        sudo systemctl reload apache2
    else
        echo -e "${YELLOW}⚠️  SSL certificate setup failed, but basic HTTP proxy is working${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No email provided, skipping SSL certificate setup${NC}"
fi

# Set up auto-renewal for SSL
if [[ ! -z "$EMAIL" ]]; then
    echo -e "${YELLOW}🔧 Step 8: Setting up SSL auto-renewal...${NC}"
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
fi

# Open firewall ports
echo -e "${YELLOW}🔧 Step 9: Configuring firewall...${NC}"
sudo ufw allow 'Apache Full' 2>/dev/null || echo "UFW not available or already configured"

echo ""
echo -e "${GREEN}🎉 Apache2 Reverse Proxy Setup Complete!${NC}"
echo "============================================="
echo ""
echo -e "${BLUE}✅ Configuration Summary:${NC}"
echo "  • Domain: $DOMAIN_NAME"
echo "  • HTTP: Redirects to HTTPS (if SSL configured)"
echo "  • HTTPS: Proxies to Next.js on port 3000"
echo "  • SSL: Auto-renewal enabled"
echo "  • Caching: Static assets cached for 1 year"
echo "  • Security: Headers configured"
echo ""
echo -e "${BLUE}🔗 Access your website:${NC}"
echo "  • HTTP:  http://$DOMAIN_NAME"
echo "  • HTTPS: https://$DOMAIN_NAME"
echo ""
echo -e "${BLUE}📊 Monitoring:${NC}"
echo "  • Apache logs: /var/log/apache2/seyyone_*.log"
echo "  • Test config: sudo apache2ctl configtest"
echo "  • Reload: sudo systemctl reload apache2"
echo "  • Next.js: pm2 status"
echo ""
echo -e "${BLUE}🛠️  Troubleshooting:${NC}"
echo "  • Check Next.js: curl http://localhost:3000"
echo "  • Check Apache: sudo systemctl status apache2"
echo "  • View logs: sudo tail -f /var/log/apache2/seyyone_error.log"
echo ""
echo -e "${GREEN}Your Seyyone website is now live! 🚀${NC}"
EOF
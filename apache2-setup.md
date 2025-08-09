# 🌐 Apache2 Reverse Proxy Setup for Seyyone Website

## Step 1: Enable Required Apache2 Modules

```bash
# Enable proxy modules
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
sudo a2enmod headers
sudo a2enmod rewrite
sudo a2enmod ssl

# Restart Apache2 to load modules
sudo systemctl restart apache2
```

## Step 2: Create Virtual Host Configuration

Create the Apache2 virtual host file:

```bash
sudo nano /etc/apache2/sites-available/seyyone.conf
```

### Basic HTTP Configuration (Development/Testing)

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    # Document root (can be empty for pure proxy)
    DocumentRoot /var/www/html
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog ${APACHE_LOG_DIR}/seyyone_access.log combined
    
    # Proxy to Next.js application
    ProxyPreserveHost On
    ProxyRequests Off
    
    # Main proxy pass
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # Handle WebSocket connections (if needed)
    ProxyPass /ws/ ws://localhost:3000/ws/
    ProxyPassReverse /ws/ ws://localhost:3000/ws/
    
    # Set headers
    ProxyPassReverse / http://localhost:3000/
    Header always set X-Forwarded-Proto "http"
    Header always set X-Forwarded-For %h
    
    # Optional: Compression
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>
</VirtualHost>
```

### Production HTTPS Configuration

```apache
# HTTP Virtual Host (Redirect to HTTPS)
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    # Redirect all HTTP traffic to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog ${APACHE_LOG_DIR}/seyyone_access.log combined
</VirtualHost>

# HTTPS Virtual Host (Main Configuration)
<VirtualHost *:443>
    ServerName your-domain.com
    ServerAlias www.your-domain.com
    
    # Document root
    DocumentRoot /var/www/html
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your-domain.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your-domain.com/privkey.pem
    
    # Modern SSL Configuration
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384
    SSLHonorCipherOrder off
    SSLSessionTickets off
    
    # Security Headers
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header always set X-Frame-Options DENY
    Header always set X-Content-Type-Options nosniff
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
    
    # Logging
    ErrorLog ${APACHE_LOG_DIR}/seyyone_ssl_error.log
    CustomLog ${APACHE_LOG_DIR}/seyyone_ssl_access.log combined
    
    # Proxy Configuration
    ProxyPreserveHost On
    ProxyRequests Off
    
    # Main application proxy
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    
    # Handle WebSocket connections
    ProxyPass /ws/ ws://localhost:3000/ws/
    ProxyPassReverse /ws/ ws://localhost:3000/ws/
    
    # Set proper headers for HTTPS
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
    
    # Compression for text files
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png|ico|woff|woff2)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>
</VirtualHost>
```

## Step 3: Enable the Site

```bash
# Enable the new site
sudo a2ensite seyyone.conf

# Disable default site (optional)
sudo a2dissite 000-default

# Test Apache configuration
sudo apache2ctl configtest

# If test passes, reload Apache
sudo systemctl reload apache2
```

## Step 4: SSL Certificate Setup (Production)

### Option A: Let's Encrypt (Free SSL)

```bash
# Install Certbot
sudo apt update
sudo apt install certbot python3-certbot-apache

# Get SSL certificate
sudo certbot --apache -d your-domain.com -d www.your-domain.com

# Certbot will automatically update your Apache configuration

# Test auto-renewal
sudo certbot renew --dry-run

# Set up auto-renewal cron job
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

### Option B: Manual SSL Certificate

```bash
# If you have your own SSL certificate files
sudo mkdir -p /etc/ssl/certs/seyyone
sudo mkdir -p /etc/ssl/private/seyyone

# Copy your certificate files
sudo cp your-certificate.crt /etc/ssl/certs/seyyone/
sudo cp your-private-key.key /etc/ssl/private/seyyone/

# Set proper permissions
sudo chmod 644 /etc/ssl/certs/seyyone/your-certificate.crt
sudo chmod 600 /etc/ssl/private/seyyone/your-private-key.key
```

## Step 5: Advanced Configuration Options

### Load Balancing (if running multiple instances)

```apache
# Add to your virtual host
ProxyBalancer balancer://mycluster
BalancerMember http://localhost:3000
BalancerMember http://localhost:3001
BalancerMember http://localhost:3002
ProxySet lbmethod=byrequests

ProxyPass / balancer://mycluster/
ProxyPassReverse / balancer://mycluster/
```

### Health Check Configuration

```apache
# Add health check location
<Location "/health">
    ProxyPass http://localhost:3000/api/health
    ProxyPassReverse http://localhost:3000/api/health
</Location>
```

### Custom Error Pages

```apache
# Add to virtual host
ErrorDocument 502 /502.html
ErrorDocument 503 /503.html

# Create error pages in DocumentRoot
<LocationMatch "^/(502|503)\.html$">
    ProxyPass !
</LocationMatch>
```

## Step 6: Performance Optimization

### Enable Modules for Performance

```bash
sudo a2enmod expires
sudo a2enmod deflate
sudo a2enmod filter
```

### Add to Virtual Host

```apache
# Enable compression
LoadModule deflate_module modules/mod_deflate.so
<Location />
    SetOutputFilter DEFLATE
    # Don't compress images
    SetEnvIfNoCase Request_URI \
        \.(?:gif|jpe?g|png|ico)$ no-gzip dont-vary
    # Don't compress already compressed files
    SetEnvIfNoCase Request_URI \
        \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
</Location>

# Cache static assets
ExpiresActive On
ExpiresByType text/css "access plus 1 year"
ExpiresByType application/javascript "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
```

## Step 7: Monitoring and Logging

### Log Analysis

```bash
# View real-time access logs
sudo tail -f /var/log/apache2/seyyone_access.log

# View error logs
sudo tail -f /var/log/apache2/seyyone_error.log

# Analyze most common requests
sudo awk '{print $7}' /var/log/apache2/seyyone_access.log | sort | uniq -c | sort -rn | head -10
```

### Status Monitoring

```bash
# Enable Apache status module
sudo a2enmod status

# Add to your configuration
<Location "/server-status">
    SetHandler server-status
    Require ip 127.0.0.1
    Require ip YOUR_ADMIN_IP
</Location>
```

## Step 8: Security Hardening

### Additional Security Headers

```apache
# Add to HTTPS virtual host
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';"
Header always set X-XSS-Protection "1; mode=block"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
```

### Hide Apache Version

```bash
# Edit Apache security configuration
sudo nano /etc/apache2/conf-available/security.conf

# Set these values:
ServerTokens Prod
ServerSignature Off
```

## Step 9: Testing Your Setup

### Test HTTP to HTTPS Redirect

```bash
curl -I http://your-domain.com
# Should return 301 redirect to HTTPS
```

### Test HTTPS Connection

```bash
curl -I https://your-domain.com
# Should return 200 OK with proper headers
```

### Test SSL Certificate

```bash
# Use SSL Labs test
# Go to: https://www.ssllabs.com/ssltest/analyze.html?d=your-domain.com

# Or use command line
openssl s_client -connect your-domain.com:443 -servername your-domain.com
```

## Step 10: Maintenance Scripts

### Restart Script

```bash
#!/bin/bash
# restart-seyyone.sh

echo "🔄 Restarting Seyyone services..."

# Restart Next.js application
pm2 restart seyyone-website

# Reload Apache configuration
sudo systemctl reload apache2

echo "✅ Services restarted!"
```

### Log Rotation

```bash
sudo nano /etc/logrotate.d/seyyone

# Add:
/var/log/apache2/seyyone*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        if /bin/systemctl status apache2 > /dev/null ; then \
            /bin/systemctl reload apache2 > /dev/null; \
        fi;
    endscript
}
```

## 🎉 Complete Setup Checklist

- [ ] Apache2 modules enabled
- [ ] Virtual host configuration created
- [ ] Site enabled and Apache reloaded
- [ ] SSL certificate installed (production)
- [ ] DNS pointing to your server
- [ ] Next.js application running on port 3000
- [ ] Firewall configured (ports 80, 443 open)
- [ ] Security headers configured
- [ ] Logging and monitoring set up
- [ ] Performance optimization enabled

Your Seyyone website should now be accessible via Apache2 reverse proxy! 🚀
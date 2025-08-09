# 🚀 Production Deployment

Host Apache2 with Let's Encrypt + Docker Next.js app

## Quick Start

```bash
# One-command deployment
./deploy-production.sh
```

**OR Manual:**
```bash
docker compose up -d
./setup-apache-host.sh
```

## What It Does

- **Apache2**: Reverse proxy with SSL/HTTPS 
- **Docker**: Next.js app (localhost:3000 only)
- **Let's Encrypt**: Free SSL certificates with auto-renewal
- **Security**: HTTPS redirect, security headers

## Manual Setup

```bash
# Install Apache2 + Certbot
sudo apt install apache2 certbot python3-certbot-apache
sudo a2enmod proxy proxy_http ssl

# Configure virtual host
sudo cp apache2-host/seyyone.conf /etc/apache2/sites-available/seyyone.conf
sudo a2ensite seyyone.conf
sudo systemctl reload apache2

# Get SSL certificate  
sudo certbot --apache -d yourdomain.com
```

## Useful Commands

```bash
# Check status
docker compose ps
sudo systemctl status apache2

# View logs  
docker compose logs -f
sudo tail -f /var/log/apache2/seyyone_*.log

# Restart services
docker compose restart
sudo systemctl restart apache2

# SSL management
sudo certbot certificates
sudo certbot renew
```
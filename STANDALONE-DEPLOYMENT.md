# 🚀 Standalone Next.js Server Deployment Guide

## ✅ Build Status
Your standalone Next.js server has been successfully built and tested!

## 📁 Standalone Build Location
```
.next/standalone/
├── .next/          # Application files and static assets
├── node_modules/   # Minimal production dependencies
├── public/         # Public assets (images, etc.)
├── package.json    # Package configuration
└── server.js       # Standalone server entry point
```

## 🔧 Quick Start

### 1. Local Testing
```bash
# Test locally on port 3001
NODE_ENV=production PORT=3001 node .next/standalone/server.js

# Or use the startup script
./start-production.sh node
```

### 2. Production Deployment Options

#### Option A: Simple Node.js Deployment
```bash
# On your production server
cd /var/www/seyyone
NODE_ENV=production PORT=3000 node server.js
```

#### Option B: PM2 Process Manager (Recommended)
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js --env production

# Or use the startup script
./start-production.sh pm2

# Useful PM2 commands
pm2 status              # Check status
pm2 logs seyyone-website # View logs
pm2 restart seyyone-website # Restart
pm2 stop seyyone-website    # Stop
pm2 monit               # Monitor resources
```

#### Option C: Docker Container
```bash
# Build Docker image
docker build -t seyyone-website .

# Run with Docker
docker run -d -p 3000:3000 --name seyyone-website seyyone-website

# Or use docker-compose
docker-compose up -d

# Or use the startup script
./start-production.sh docker
```

## 📦 Deployment Package

### Files to Deploy
```bash
# Create deployment package
tar -czf seyyone-deployment.tar.gz \
  .next/standalone/ \
  ecosystem.config.js \
  start-production.sh \
  Dockerfile \
  docker-compose.yml
```

### Transfer to Server
```bash
# SCP to your server
scp seyyone-deployment.tar.gz user@yourserver:/var/www/

# On the server, extract
cd /var/www
tar -xzf seyyone-deployment.tar.gz
```

## 🔐 Environment Variables

Create `.env.production` on your server:
```env
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
NEXT_TELEMETRY_DISABLED=1
```

## 🌐 Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🚦 Systemd Service (Alternative to PM2)

Create `/etc/systemd/system/seyyone.service`:
```ini
[Unit]
Description=Seyyone Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/seyyone/.next/standalone
ExecStart=/usr/bin/node server.js
Restart=always
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable seyyone
sudo systemctl start seyyone
sudo systemctl status seyyone
```

## 📊 Monitoring

### Health Check Endpoint
Add to your application:
```javascript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'healthy' })
}
```

### Monitoring with PM2
```bash
# Real-time monitoring
pm2 monit

# Web dashboard
pm2 install pm2-server-monit
pm2 web
```

## 🔄 CI/CD Deployment Script

Create `deploy.sh` on your server:
```bash
#!/bin/bash
cd /var/www/seyyone
git pull origin main
npm ci --omit=dev
npm run build
pm2 restart seyyone-website
```

## 📈 Performance Optimization

1. **Enable Compression**
   - Already handled by Next.js standalone

2. **CDN for Static Assets**
   - Consider CloudFlare or AWS CloudFront

3. **Database Connection Pooling**
   - If using database, implement connection pooling

4. **Rate Limiting**
   - Add rate limiting with nginx or express-rate-limit

## 🎉 Success!

Your standalone Next.js server is ready for production deployment!

**Current Status:**
- ✅ Standalone build created
- ✅ Static assets included
- ✅ PM2 configuration ready
- ✅ Docker configuration ready
- ✅ Startup scripts created
- ✅ Server tested and running

**Access your application:**
- Local: http://localhost:3001
- Production: https://your-domain.com

**Build Information:**
- Build Size: ~150KB (largest page)
- Routes: 7 static pages
- Performance: Optimized with code splitting
- Features: All animations and enhancements included
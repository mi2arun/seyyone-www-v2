# 🚀 Production Deployment Guide

## Prerequisites
- Node.js 18+ installed on your server
- PM2 (Process Manager) for production process management

## Method 1: Standalone Server (Recommended)

### 1. Copy Files to Server
Copy these files/folders to your production server:
```bash
.next/standalone/          # Self-contained application
.next/static/             # Static assets
public/                   # Public assets (images, etc.)
```

### 2. Directory Structure on Server
```
/var/www/seyyone/
├── .next/
│   ├── standalone/       # Contains server.js and dependencies
│   └── static/          # Static assets
└── public/              # Public assets
```

### 3. Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### 4. Create PM2 Configuration
Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'seyyone-website',
    script: '.next/standalone/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0'
    }
  }]
}
```

### 5. Start Application
```bash
# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

### 6. Setup Nginx Reverse Proxy
Create `/etc/nginx/sites-available/seyyone`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

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
        add_header Cache-Control "public, immutable";
    }

    # Cache images
    location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 7. Enable Site and Restart Nginx
```bash
sudo ln -s /etc/nginx/sites-available/seyyone /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Method 2: Docker Deployment

### 1. Create Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 2. Build and Run Docker Container
```bash
# Build image
docker build -t seyyone-website .

# Run container
docker run -p 3000:3000 seyyone-website
```

### 3. Docker Compose (Optional)
```yaml
# docker-compose.yml
version: '3.8'
services:
  seyyone-web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

## Method 3: Static Export (if no server-side features needed)

### 1. Update next.config.js
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/seyyone' : ''
}
```

### 2. Build Static Files
```bash
npm run build
```

### 3. Serve with Any Web Server
The `out/` folder contains static files that can be served by:
- Apache HTTP Server
- Nginx
- AWS S3 + CloudFront
- GitHub Pages
- Netlify/Vercel

## SSL/HTTPS Setup

### Using Let's Encrypt with Certbot
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Monitoring & Maintenance

### PM2 Commands
```bash
# Check status
pm2 status

# View logs
pm2 logs seyyone-website

# Restart application
pm2 restart seyyone-website

# Monitor resources
pm2 monit
```

### Performance Optimization
- Enable gzip compression in Nginx
- Set up CDN for static assets
- Monitor server resources with PM2
- Set up log rotation
- Regular security updates

## Environment Variables
Create `.env.production.local` for production-specific variables:
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add your production-specific variables here
```

## Quick Start Commands

### Standalone Deployment
```bash
# 1. Build application
npm run build

# 2. Copy to server
rsync -avz .next/standalone/ user@server:/var/www/seyyone/
rsync -avz .next/static/ user@server:/var/www/seyyone/.next/static/
rsync -avz public/ user@server:/var/www/seyyone/public/

# 3. Start on server
cd /var/www/seyyone
pm2 start server.js --name seyyone-website
```

Your Seyyone website is now ready for production deployment! 🎉
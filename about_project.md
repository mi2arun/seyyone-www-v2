# Seyyone Website v2 - Project Overview

## 📋 Project Summary
This is the corporate website for **Seyyone**, a healthcare back office services company establishing its presence since 1999. The project showcases their dual expertise in **Medical Services** and **Technology Solutions**.

## 🏗️ Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Runtime**: Node.js 18+
- **Containerization**: Docker
- **Server**: Apache2 (Reverse Proxy) with Let's Encrypt SSL

## 📁 Key Directory Structure

```
seyyone-www-v2/
├── app/                    # Next.js App Router pages
│   ├── medical/            # Medical services division
│   ├── technology/         # Technology services division
│   ├── career/             # Careers page
│   ├── contact/            # Contact page
│   └── layout.tsx          # Root layout & Metadata
├── components/             # Reusable UI components
│   ├── medical/            # Medical-specific components
│   ├── technology/         # Technology-specific components
│   ├── Hero.tsx            # Main homepage hero
│   └── Navigation.tsx      # Global navigation
├── public/                 # Static assets (images, fonts)
└── [Deployment Scripts]    # (See Deployment section)
```

## 🚀 Deployment Architecture
The application is designed to be deployed as a Docker container behind an Apache2 reverse proxy.

- **Docker**: Runs the Next.js standalone build on port 3000.
- **Apache2**: Handles SSL termination (Let's Encrypt) and proxies traffic to the container.
- **Scripts**:
  - `deploy-production.sh`: Automates the build and deploy process.
  - `setup-apache-host.sh`: Configures the Apache virtual host.

## 💼 Business Domains
The website is divided into two primary service areas:
1.  **Medical Services**: Transcription, Billing, Coding, EHR Support.
2.  **Technology Services**: Custom Software, Consulting, Digital Solutions.

## 🛠️ Development Commands
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `docker compose up -d`: Run in Docker locally.

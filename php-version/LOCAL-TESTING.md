# 🚀 Local PHP Testing Guide for Seyyone Website

## Quick Start - PHP Built-in Server

### 1. Navigate to PHP Directory
```bash
cd php-version
```

### 2. Start PHP Development Server
```bash
# Basic server on localhost:8000
php -S localhost:8000

# Custom port
php -S localhost:3000

# Specific document root
php -S localhost:8000 -t .

# With verbose output
php -S localhost:8000 -t . -d display_errors=1
```

### 3. Access Your Website
Open your browser and visit:
- **Homepage**: http://localhost:8000
- **Direct**: http://localhost:8000/index.php

## 📊 Server Status

✅ **PHP Version**: 8.4.8 (Compatible)  
✅ **Server**: Built-in Development Server  
✅ **Port**: 8000 (Default)  
✅ **Document Root**: Current directory  

## 🛠️ Testing Commands

### Basic Testing
```bash
# Start server (default port 8000)
php -S localhost:8000

# Start on different port
php -S localhost:3000

# Start with error reporting
php -S localhost:8000 -d display_errors=1 -d error_reporting=E_ALL
```

### Advanced Testing
```bash
# With custom router (if needed)
php -S localhost:8000 router.php

# Bind to all interfaces (for network access)
php -S 0.0.0.0:8000

# With specific PHP configuration
php -S localhost:8000 -d memory_limit=256M -d max_execution_time=300
```

## 🔧 Alternative Methods

### Method 2: XAMPP (Windows/Mac/Linux)

1. **Download XAMPP**: https://www.apachefriends.org/
2. **Install and Start**: Apache and MySQL
3. **Copy Files**: Copy `php-version/*` to `htdocs/seyyone/`
4. **Access**: http://localhost/seyyone/

### Method 3: MAMP (Mac/Windows)

1. **Download MAMP**: https://www.mamp.info/
2. **Start**: Apache and MySQL
3. **Copy Files**: To `htdocs` folder
4. **Access**: http://localhost:8888/

### Method 4: Docker

```bash
# Quick PHP server with Docker
docker run -d -p 8080:80 -v $(pwd):/var/www/html php:8.1-apache

# Access at http://localhost:8080
```

### Method 5: Local Apache/Nginx

If you have Apache or Nginx installed:

```bash
# Create virtual host pointing to php-version directory
# Access via http://seyyone.local
```

## 🌐 Testing Checklist

### ✅ Basic Functionality
- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Navigation menu works
- [ ] Mobile responsive design
- [ ] Smooth scrolling
- [ ] Contact links work

### ✅ PHP Features
- [ ] Configuration loads from config.php
- [ ] Dynamic content displays
- [ ] No PHP errors in browser
- [ ] All includes/requires work
- [ ] Form submissions (if any)

### ✅ Performance
- [ ] Page loads quickly
- [ ] CSS animations work smoothly
- [ ] No JavaScript errors
- [ ] Images optimized and loading
- [ ] Mobile performance good

## 🐛 Common Issues & Solutions

### Issue 1: Port Already in Use
```bash
# Error: Address already in use
# Solution: Use different port
php -S localhost:8001

# Or kill existing process
lsof -i :8000
kill [PID]
```

### Issue 2: PHP Not Found
```bash
# Error: command not found: php
# Solution: Install PHP
# Mac: brew install php
# Ubuntu: sudo apt install php
# Windows: Download from php.net
```

### Issue 3: Images Not Loading
```bash
# Check if assets directory exists
ls -la assets/images/

# Copy logo from public directory
cp ../public/logo-blue.png assets/images/

# Or create placeholder
mkdir -p assets/images
```

### Issue 4: CSS Not Loading
```bash
# Check Tailwind CDN in index.php
# Ensure internet connection for CDN
# Fallback: download tailwind.css locally
```

## 📱 Mobile Testing

### Browser DevTools
1. **Chrome**: F12 → Device Toggle (Ctrl+Shift+M)
2. **Firefox**: F12 → Responsive Design Mode
3. **Safari**: Developer → Responsive Design Mode

### Test Different Devices
- **Mobile**: iPhone, Android phones
- **Tablet**: iPad, Android tablets  
- **Desktop**: Various screen sizes

## 🔍 Debugging

### Enable PHP Error Reporting
```bash
# Start server with error reporting
php -S localhost:8000 -d display_errors=1 -d error_reporting=E_ALL
```

### Check PHP Logs
```bash
# View PHP error log
tail -f /var/log/php_errors.log

# Or check server output
# Errors will show in terminal where you started the server
```

### Browser Developer Tools
1. **Console**: Check for JavaScript errors
2. **Network**: Monitor resource loading
3. **Elements**: Inspect HTML/CSS
4. **Performance**: Analyze page speed

## 📈 Performance Testing

### Page Speed
```bash
# Use curl to test response time
time curl http://localhost:8000

# Or use browser dev tools Network tab
```

### Load Testing (Optional)
```bash
# Install Apache Bench
# Mac: brew install httpd
# Ubuntu: sudo apt install apache2-utils

# Test 100 requests with 10 concurrent
ab -n 100 -c 10 http://localhost:8000/
```

## 🚀 Production Testing

### Before Going Live
1. **Test All Features**: Navigation, forms, links
2. **Check Mobile**: Responsive design
3. **Validate HTML**: Use W3C validator
4. **Test Performance**: Page load speed
5. **Security Check**: No sensitive data exposed
6. **Cross-browser**: Chrome, Firefox, Safari, Edge

### Environment Switch
```php
// In config.php, change to production
$environment = 'production';
```

## 🎯 Quick Test Script

Create a test script `test.php`:

```php
<?php
// Quick system test
echo "<h1>Seyyone PHP Website Test</h1>";
echo "<p>PHP Version: " . PHP_VERSION . "</p>";
echo "<p>Server: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
echo "<p>Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "</p>";

// Test config file
include 'config.php';
echo "<p>Site Name: " . SITE_NAME . "</p>";
echo "<p>Company Email: " . COMPANY_EMAIL . "</p>";

// Test assets
echo "<p>Logo exists: " . (file_exists('assets/images/logo-blue.png') ? 'Yes' : 'No') . "</p>";

echo "<p style='color: green;'>✅ All tests passed!</p>";
?>
```

## 📞 Quick Commands Summary

```bash
# Start PHP server
php -S localhost:8000

# Start with errors visible
php -S localhost:8000 -d display_errors=1

# Start on different port
php -S localhost:3000

# Check PHP version
php --version

# Test specific file
curl http://localhost:8000/index.php

# Stop server: Ctrl+C in terminal
```

## 🌟 Success!

Your Seyyone PHP website is now running locally! 

**Access URLs:**
- 🏠 **Homepage**: http://localhost:8000
- 🧪 **Test Page**: http://localhost:8000/test.php (if created)
- 📱 **Mobile View**: Use browser dev tools

**Next Steps:**
1. Test all functionality
2. Make any needed customizations  
3. Deploy to production server

Happy testing! 🎉
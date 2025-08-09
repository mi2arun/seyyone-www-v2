# 🚀 Seyyone PHP Website

A simple, fast, and responsive PHP version of the Seyyone website featuring modern design and smooth animations.

## ✨ Features

- **Pure PHP**: No frameworks or dependencies required
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Loading**: Optimized for speed and performance
- **SEO Friendly**: Clean URLs and meta tags
- **Animations**: Smooth CSS animations and transitions
- **HIPAA Focus**: Healthcare compliance messaging
- **Professional**: Enterprise-grade design and content

## 📁 Structure

```
php-version/
├── index.php              # Main homepage
├── config.php             # Configuration and data
├── assets/                 # Static assets
│   ├── images/            # Images and logos
│   ├── css/               # Custom CSS (future)
│   └── js/                # Custom JS (future)
├── .htaccess              # Apache configuration
└── README.md              # This file
```

## 🖥️ Server Requirements

- **PHP**: 7.4 or higher (8.x recommended)
- **Apache**: 2.4+ with mod_rewrite
- **Extensions**: Standard PHP extensions (no special requirements)

## 🚀 Installation

### 1. Upload Files
```bash
# Upload to your web server
scp -r php-version/* user@yourserver:/var/www/html/
```

### 2. Set Permissions
```bash
# Set appropriate file permissions
chmod 644 *.php
chmod 755 assets/
chmod 644 assets/images/*
chmod 644 .htaccess
```

### 3. Configure Apache
Ensure your Apache server has:
- `mod_rewrite` enabled
- `mod_headers` enabled (for security headers)
- `mod_deflate` enabled (for compression)

```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod deflate
sudo systemctl restart apache2
```

## ⚙️ Configuration

Edit `config.php` to customize:

```php
// Website Information
define('SITE_NAME', 'Seyyone');
define('SITE_TITLE', 'Your Custom Title');
define('COMPANY_EMAIL', 'your-email@domain.com');
define('COMPANY_PHONE', 'your-phone-number');
```

## 🎨 Customization

### Colors and Branding
The website uses Tailwind CSS classes. Key brand colors:
- **Primary Blue**: `from-blue-600 to-cyan-600`
- **Secondary Purple**: `from-purple-600 to-pink-600`
- **Success Green**: `text-green-600`

### Content Updates
- **Services**: Modify `$healthcare_services` and `$technology_services` in `config.php`
- **Statistics**: Update `$company_stats` array
- **Contact Info**: Change company details in constants

## 📊 Performance Features

- **Compressed Assets**: Gzip compression via .htaccess
- **Browser Caching**: 1-year cache for static assets
- **Optimized Images**: Efficient image loading
- **Minified CSS**: Tailwind CSS via CDN
- **Fast Fonts**: Google Fonts with preconnect

## 🔒 Security Features

- **XSS Protection**: All output sanitized
- **CSRF Protection**: Forms include tokens (when added)
- **File Access**: Sensitive files protected
- **Headers**: Security headers via .htaccess
- **Input Validation**: All user input validated

## 📱 Mobile Responsive

- **Breakpoints**: Tailored for all screen sizes
- **Touch Friendly**: Large tap targets
- **Fast Loading**: Optimized for mobile networks
- **Progressive**: Works without JavaScript

## 🔧 Apache Virtual Host Example

```apache
<VirtualHost *:80>
    ServerName seyyone.com
    ServerAlias www.seyyone.com
    DocumentRoot /var/www/html/php-version
    
    <Directory /var/www/html/php-version>
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/seyyone_error.log
    CustomLog ${APACHE_LOG_DIR}/seyyone_access.log combined
</VirtualHost>
```

## 🚀 Production Deployment

### 1. Environment Setup
```bash
# Set production environment in config.php
$environment = 'production';
```

### 2. Enable HTTPS Redirect
Uncomment in `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 3. Optimize PHP
Add to your `php.ini`:
```ini
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=4000
```

## 📈 Analytics & Monitoring

Add Google Analytics by inserting before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Common Issues

1. **500 Error**: Check file permissions and .htaccess syntax
2. **Images Not Loading**: Verify assets/images/ path and permissions
3. **CSS Not Applied**: Ensure Tailwind CDN is accessible
4. **Clean URLs Not Working**: Enable mod_rewrite

### Debug Mode
Enable debug mode in `config.php`:
```php
$environment = 'development';
```

## 🎯 Performance Tips

1. **Enable OPcache**: PHP opcode caching
2. **Use CDN**: For Tailwind CSS and fonts
3. **Optimize Images**: Compress images before upload
4. **Enable Compression**: Gzip via .htaccess
5. **Browser Caching**: Set appropriate cache headers

## 📞 Support

For technical support or customization:
- **Email**: contact@seyyone.com
- **Phone**: +91 (422) 2310240

## 🎉 Features Included

✅ **Responsive Hero Section** with animations  
✅ **Service Showcase** cards  
✅ **Trust Indicators** with icons  
✅ **Contact Section** with click-to-call/email  
✅ **Professional Footer**  
✅ **Mobile Navigation** menu  
✅ **Smooth Scrolling** navigation  
✅ **Loading Animations**  
✅ **SEO Optimization**  
✅ **Security Headers**  

Your Seyyone PHP website is ready for production! 🚀
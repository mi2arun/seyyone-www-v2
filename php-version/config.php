<?php
// Seyyone Website Configuration
// This file contains all the configuration settings for the website

// Website Information
define('SITE_NAME', 'Seyyone');
define('SITE_TITLE', 'Excellence in Healthcare & Technology Solutions');
define('SITE_DESCRIPTION', 'Empowering businesses with comprehensive Healthcare KPO Services and cutting-edge Software Development. Trusted by 50+ healthcare providers and 100+ technology companies across 8 countries.');
define('SITE_KEYWORDS', 'Healthcare KPO, Medical Transcription, Software Development, AI ML Solutions, HIPAA Compliant, Technology Services');
define('SITE_URL', 'https://www.seyyone.com');

// Company Information
define('COMPANY_NAME', 'Seyyone');
define('COMPANY_TAGLINE', 'Transforming Businesses Since 1999');
define('COMPANY_ESTABLISHED', '1999');
define('COMPANY_EXPERIENCE', '25+');
define('COMPANY_EMPLOYEES', '150+');
define('COMPANY_COUNTRIES', '8+');
define('COMPANY_CLIENTS', '70+');

// Contact Information
define('COMPANY_EMAIL', 'contact@seyyone.com');
define('COMPANY_PHONE', '+91 (422) 2310240');
define('COMPANY_ADDRESS', '73, Anna Nagar, Ramanathapuram, Coimbatore-641045, TN, India');

// Social Media (if needed)
define('FACEBOOK_URL', '');
define('TWITTER_URL', '');
define('LINKEDIN_URL', '');
define('YOUTUBE_URL', '');

// Asset Paths
define('ASSETS_PATH', 'assets/');
define('IMAGES_PATH', ASSETS_PATH . 'images/');
define('CSS_PATH', ASSETS_PATH . 'css/');
define('JS_PATH', ASSETS_PATH . 'js/');

// Logo and Branding
define('LOGO_PATH', IMAGES_PATH . 'logo-blue.png');
define('FAVICON_PATH', IMAGES_PATH . 'favicon.ico');

// Website Settings
define('DEFAULT_TIMEZONE', 'Asia/Kolkata');
define('DEFAULT_LANGUAGE', 'en');

// Set timezone
date_default_timezone_set(DEFAULT_TIMEZONE);

// Services Data
$healthcare_services = [
    [
        'title' => 'Medical Transcription',
        'description' => 'Accurate transcription of medical records, physician notes, and clinical documentation with 99.8% accuracy rate.',
        'icon' => '🩺',
        'features' => ['24/7 Turnaround', 'HIPAA Compliant', 'Quality Assurance', '99.8% Accuracy'],
        'color' => 'blue'
    ],
    [
        'title' => 'Medical Billing',
        'description' => 'Complete revenue cycle management including claims processing, denial management, and payment posting.',
        'icon' => '💳',
        'features' => ['Claims Processing', 'AR Management', 'Denial Management', 'Payment Posting'],
        'color' => 'green'
    ],
    [
        'title' => 'Medical Coding',
        'description' => 'Expert ICD-10, CPT, and HCPCS coding services ensuring maximum reimbursement and compliance.',
        'icon' => '📋',
        'features' => ['ICD-10 Coding', 'CPT Coding', 'HCPCS Coding', 'Quality Review'],
        'color' => 'purple'
    ],
    [
        'title' => 'EHR Support',
        'description' => 'Comprehensive Electronic Health Record support and data management services.',
        'icon' => '💻',
        'features' => ['Data Entry', 'System Integration', 'Technical Support', 'Training'],
        'color' => 'indigo'
    ],
    [
        'title' => 'Medical Scribe',
        'description' => 'Real-time documentation support allowing physicians to focus on patient care.',
        'icon' => '✍️',
        'features' => ['Real-time Support', 'Clinical Documentation', 'Chart Completion', 'Template Creation'],
        'color' => 'teal'
    ],
    [
        'title' => 'Remote Patient Monitoring',
        'description' => 'Advanced RPM services with real-time data analysis and patient engagement.',
        'icon' => '📊',
        'features' => ['24/7 Monitoring', 'Data Analysis', 'Alert Management', 'Patient Communication'],
        'color' => 'orange'
    ]
];

$technology_services = [
    [
        'title' => 'AI/ML Solutions',
        'description' => 'Advanced artificial intelligence and machine learning solutions to automate processes and gain intelligent insights.',
        'icon' => '🧠',
        'features' => ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Deep Learning Models'],
        'color' => 'purple'
    ],
    [
        'title' => 'Mobile Development',
        'description' => 'Cross-platform mobile applications with native performance and exceptional user experiences.',
        'icon' => '📱',
        'features' => ['iOS & Android', 'React Native', 'Flutter Development', 'Progressive Web Apps'],
        'color' => 'blue'
    ],
    [
        'title' => 'Cloud Solutions',
        'description' => 'Scalable cloud architecture and migration services for modern, resilient applications.',
        'icon' => '☁️',
        'features' => ['AWS & Azure', 'Microservices', 'DevOps & CI/CD', 'Container Orchestration'],
        'color' => 'green'
    ],
    [
        'title' => 'Custom Software',
        'description' => 'Tailored software solutions built with modern technologies and best practices.',
        'icon' => '⚙️',
        'features' => ['Full-Stack Development', 'API Integration', 'Database Design', 'Performance Optimization'],
        'color' => 'orange'
    ],
    [
        'title' => 'Analytics & BI',
        'description' => 'Data-driven insights through advanced analytics and business intelligence platforms.',
        'icon' => '📈',
        'features' => ['Data Visualization', 'Real-time Dashboards', 'ETL Processes', 'Machine Learning Analytics'],
        'color' => 'indigo'
    ],
    [
        'title' => 'Digital Transformation',
        'description' => 'Complete digital transformation services to modernize legacy systems and processes.',
        'icon' => '🔄',
        'features' => ['Legacy Modernization', 'Process Automation', 'Digital Strategy', 'Change Management'],
        'color' => 'teal'
    ]
];

// Statistics
$company_stats = [
    [
        'number' => '25+',
        'label' => 'Years Experience',
        'icon' => '⭐',
        'color' => 'blue'
    ],
    [
        'number' => '150+',
        'label' => 'Employees',
        'icon' => '👥',
        'color' => 'green'
    ],
    [
        'number' => '70+',
        'label' => 'Satisfied Clients',
        'icon' => '🤝',
        'color' => 'purple'
    ],
    [
        'number' => '8+',
        'label' => 'Countries Served',
        'icon' => '🌍',
        'color' => 'orange'
    ]
];

// Trust Indicators
$trust_indicators = [
    [
        'icon' => '🛡️',
        'text' => 'HIPAA Compliant',
        'description' => 'Ensuring highest standards of data security and compliance.',
        'color' => 'green'
    ],
    [
        'icon' => '🌐',
        'text' => 'Global Reach',
        'description' => 'Serving clients across 8 countries worldwide.',
        'color' => 'blue'
    ],
    [
        'icon' => '⭐',
        'text' => '25+ Years',
        'description' => 'Over two decades of industry expertise and excellence.',
        'color' => 'purple'
    ]
];

// Countries served (with flags)
$countries_served = [
    ['name' => 'USA', 'flag' => '🇺🇸'],
    ['name' => 'UK', 'flag' => '🇬🇧'],
    ['name' => 'Canada', 'flag' => '🇨🇦'],
    ['name' => 'Australia', 'flag' => '🇦🇺'],
    ['name' => 'Ireland', 'flag' => '🇮🇪'],
    ['name' => 'Germany', 'flag' => '🇩🇪'],
    ['name' => 'Netherlands', 'flag' => '🇳🇱'],
    ['name' => 'India', 'flag' => '🇮🇳']
];

// Utility Functions
function getCurrentYear() {
    return date('Y');
}

function formatPhone($phone) {
    return str_replace(['+', '-', ' '], ['', '', ''], $phone);
}

function getAssetUrl($path) {
    return SITE_URL . '/' . $path;
}

function sanitizeOutput($text) {
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

// Page-specific configurations
$page_configs = [
    'home' => [
        'title' => SITE_TITLE,
        'description' => SITE_DESCRIPTION,
        'keywords' => SITE_KEYWORDS
    ],
    'healthcare' => [
        'title' => 'Healthcare KPO Services - ' . SITE_NAME,
        'description' => 'HIPAA-compliant healthcare KPO services including medical transcription, billing, coding, and EHR support.',
        'keywords' => 'Healthcare KPO, Medical Transcription, Medical Billing, Medical Coding, EHR Support, HIPAA Compliant'
    ],
    'technology' => [
        'title' => 'Technology Solutions - ' . SITE_NAME,
        'description' => 'Cutting-edge technology solutions including AI/ML, mobile development, cloud services, and custom software.',
        'keywords' => 'AI ML Solutions, Mobile Development, Cloud Services, Custom Software, Technology Solutions'
    ]
];

// Development/Production Settings
$environment = 'production'; // Change to 'development' for local testing

$settings = [
    'show_errors' => ($environment === 'development'),
    'minify_css' => ($environment === 'production'),
    'minify_js' => ($environment === 'production'),
    'cache_enabled' => ($environment === 'production'),
    'debug_mode' => ($environment === 'development')
];

// Error reporting based on environment
if ($settings['show_errors']) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

?>
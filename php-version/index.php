<?php
// Seyyone Website - PHP Version
// Main configuration
$config = [
    'site_title' => 'Seyyone - Excellence in Healthcare & Technology Solutions',
    'meta_description' => 'Empowering businesses with comprehensive Healthcare KPO Services and cutting-edge Software Development. Trusted by 50+ healthcare providers and 100+ technology companies across 8 countries.',
    'company_name' => 'Seyyone',
    'logo_path' => 'assets/logo-blue.png',
    'current_year' => date('Y')
];

// Dynamic content
$trust_indicators = [
    ['icon' => '🛡️', 'text' => 'HIPAA Compliant', 'color' => 'green'],
    ['icon' => '🌐', 'text' => 'Global Reach', 'color' => 'blue'],
    ['icon' => '⭐', 'text' => '25+ Years', 'color' => 'purple']
];

$healthcare_services = ['Medical Transcription', 'Medical Billing', 'EHR Support', 'Medical Coding'];
$technology_services = ['AI/ML Solutions', 'Mobile Apps', 'Cloud Services', 'Custom Software'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($config['site_title']); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($config['meta_description']); ?>">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="<?php echo htmlspecialchars($config['site_title']); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($config['meta_description']); ?>">
    <meta property="og:type" content="website">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <style>
        * { font-family: 'Inter', sans-serif; }
        
        /* Custom animations */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        @keyframes gradientShift {
            0%, 100% { background: linear-gradient(45deg, #f0f9ff, #ffffff, #f8fafc); }
            50% { background: linear-gradient(45deg, #e0f2fe, #f0f9ff, #e2e8f0); }
        }
        
        .animate-fade-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
            animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
            animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
            animation: pulse 3s ease-in-out infinite;
        }
        
        .gradient-bg {
            background: linear-gradient(45deg, #f0f9ff, #ffffff, #f8fafc);
            animation: gradientShift 8s ease-in-out infinite;
        }
        
        .btn-primary {
            @apply bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105;
        }
        
        .btn-secondary {
            @apply bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105;
        }
        
        .trust-badge {
            @apply flex items-center space-x-3 px-4 py-3 rounded-full border transition-all duration-300 hover:shadow-lg cursor-pointer;
        }
        
        .service-card {
            @apply bg-white rounded-2xl shadow-xl p-6 border transition-all duration-300 hover:shadow-2xl hover:scale-105;
        }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* Loading animation */
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out;
        }
        
        .page-loader.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem !important; line-height: 1.1; }
            .hero-subtitle { font-size: 1.125rem !important; }
        }
    </style>
</head>
<body class="bg-white">
    <!-- Page Loader -->
    <div class="page-loader" id="pageLoader">
        <div class="flex flex-col items-center">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            <p class="mt-4 text-gray-600">Loading <?php echo $config['company_name']; ?>...</p>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="#home" class="flex items-center hover:scale-105 transition-transform duration-300">
                    <?php if (file_exists($config['logo_path'])): ?>
                        <img src="<?php echo $config['logo_path']; ?>" alt="<?php echo $config['company_name']; ?> Logo" class="w-20 h-20 object-contain">
                    <?php else: ?>
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            S
                        </div>
                    <?php endif; ?>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="#home" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                    <a href="#about" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                    <a href="#healthcare" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Healthcare</a>
                    <a href="#technology" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Technology</a>
                    <a href="#careers" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Careers</a>
                    <a href="#contact" class="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                    <a href="#contact" class="btn-primary">Get Started</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 py-4">
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                    <a href="#about" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                    <a href="#healthcare" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Healthcare</a>
                    <a href="#technology" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Technology</a>
                    <a href="#careers" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Careers</a>
                    <a href="#contact" class="mobile-nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                    <a href="#contact" class="btn-primary w-fit">Get Started</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 gradient-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <!-- Content -->
                <div class="space-y-8 lg:space-y-10 animate-slide-left">
                    <div class="space-y-6">
                        <!-- Badge -->
                        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-lg animate-pulse-slow">
                            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            Over 25 Years of Excellence
                        </div>
                        
                        <!-- Main Title -->
                        <h1 class="hero-title text-5xl md:text-7xl font-black leading-[1.1] animate-fade-up">
                            <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                                Excellence in
                            </span>
                            <br>
                            <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Healthcare
                            </span>
                            <span class="text-gray-400 mx-4">&</span>
                            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Technology
                            </span>
                            <br>
                            <span class="text-gray-700">Solutions</span>
                        </h1>
                        
                        <!-- Description -->
                        <div class="space-y-6 animate-fade-up" style="animation-delay: 0.3s">
                            <p class="hero-subtitle text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                                Empowering businesses with comprehensive 
                                <span class="px-2 py-1 rounded font-semibold text-blue-700 bg-blue-100">Healthcare KPO Services</span> 
                                and cutting-edge 
                                <span class="px-2 py-1 rounded font-semibold text-purple-700 bg-purple-100">Software Development</span>
                            </p>
                            
                            <!-- Domain Cards -->
                            <div class="grid md:grid-cols-2 gap-4 max-w-3xl">
                                <div class="service-card border-blue-100 hover:border-blue-200">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-blue-900">Healthcare & Medical</h3>
                                    </div>
                                    <p class="text-sm text-blue-700 leading-relaxed mb-3">
                                        HIPAA-compliant medical transcription, billing, coding, and comprehensive EHR support.
                                    </p>
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="text-xs font-semibold text-green-700">99.8% Accuracy</span>
                                    </div>
                                </div>

                                <div class="service-card border-purple-100 hover:border-purple-200">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-purple-900">Technology & Software</h3>
                                    </div>
                                    <p class="text-sm text-purple-700 leading-relaxed mb-3">
                                        AI/ML solutions, cloud services, mobile development, and custom software architecture.
                                    </p>
                                    <div class="flex items-center space-x-2">
                                        <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="text-xs font-semibold text-purple-700">100+ Projects</span>
                                    </div>
                                </div>
                            </div>

                            <p class="text-lg text-gray-500 leading-relaxed max-w-2xl">
                                Trusted by <strong class="text-blue-600">50+ healthcare providers</strong> and 
                                <strong class="text-purple-600">100+ technology companies</strong> across 
                                <strong class="text-green-600">8 countries</strong>.
                            </p>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full animate-fade-up" style="animation-delay: 0.6s">
                        <a href="#healthcare" class="btn-primary group relative overflow-hidden">
                            <span class="relative z-10 flex items-center gap-3">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                </svg>
                                Healthcare Services
                                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>

                        <a href="#technology" class="btn-secondary group relative overflow-hidden">
                            <span class="relative z-10 flex items-center gap-3">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                Technology Solutions
                                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 pt-8 animate-fade-up" style="animation-delay: 0.9s">
                        <?php foreach ($trust_indicators as $index => $indicator): ?>
                            <?php 
                            $color_classes = [
                                'green' => 'bg-green-50 border-green-200 text-green-700',
                                'blue' => 'bg-blue-50 border-blue-200 text-blue-700',
                                'purple' => 'bg-purple-50 border-purple-200 text-purple-700'
                            ];
                            ?>
                            <div class="trust-badge <?php echo $color_classes[$indicator['color']]; ?>">
                                <span class="text-2xl"><?php echo $indicator['icon']; ?></span>
                                <span class="text-sm font-semibold"><?php echo $indicator['text']; ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- Visual Element -->
                <div class="relative mt-12 lg:mt-0 px-4 lg:px-8 animate-slide-right">
                    <div class="relative">
                        <!-- Floating elements -->
                        <div class="absolute -top-4 -right-4 animate-float">
                            <div class="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-5 rounded-2xl shadow-xl border-4 border-white">
                                <div class="text-2xl font-black mb-1">25+</div>
                                <div class="text-xs opacity-90 font-medium">Years</div>
                            </div>
                        </div>

                        <div class="absolute -bottom-4 -left-4 animate-float" style="animation-delay: 3s">
                            <div class="bg-white border-4 border-blue-200 p-5 rounded-2xl shadow-xl">
                                <div class="text-2xl font-black text-blue-600 mb-1">150+</div>
                                <div class="text-xs text-gray-600 font-medium">Employees</div>
                            </div>
                        </div>

                        <!-- Showcase Cards -->
                        <div class="space-y-6">
                            <!-- Healthcare Card -->
                            <div class="service-card border-blue-100 backdrop-blur-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-blue-900">Healthcare KPO</h3>
                                            <p class="text-sm text-blue-600">HIPAA Compliant Services</p>
                                        </div>
                                    </div>
                                    <div class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold animate-pulse-slow">
                                        99.8% Accuracy
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <?php foreach ($healthcare_services as $service): ?>
                                        <div class="bg-blue-100 px-3 py-2 rounded-lg text-center">
                                            <span class="text-xs font-semibold text-blue-700"><?php echo $service; ?></span>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>

                            <!-- Technology Card -->
                            <div class="service-card border-purple-100 backdrop-blur-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-purple-900">Technology Solutions</h3>
                                            <p class="text-sm text-purple-600">AI/ML & Cloud Services</p>
                                        </div>
                                    </div>
                                    <div class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold animate-pulse-slow" style="animation-delay: 0.5s">
                                        100+ Projects
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <?php foreach ($technology_services as $service): ?>
                                        <div class="bg-purple-100 px-3 py-2 rounded-lg text-center">
                                            <span class="text-xs font-semibold text-purple-700"><?php echo $service; ?></span>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Contact Section -->
    <section id="contact" class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p class="text-blue-100 mb-8 text-lg">
                Let&rsquo;s discuss how our expertise can help streamline your operations and drive growth.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@seyyone.com" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>Email Us</span>
                </a>
                <a href="tel:+914222310240" class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>Call Us</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <div class="mb-6">
                    <?php if (file_exists($config['logo_path'])): ?>
                        <img src="<?php echo $config['logo_path']; ?>" alt="<?php echo $config['company_name']; ?> Logo" class="w-24 h-24 mx-auto mb-4">
                    <?php else: ?>
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                            S
                        </div>
                    <?php endif; ?>
                    <p class="text-gray-300 max-w-2xl mx-auto">
                        Transforming businesses through technology and expertise since 1999. 
                        Delivering innovative Healthcare KPO and Software Development solutions.
                    </p>
                </div>
                
                <div class="border-t border-gray-800 pt-8">
                    <p class="text-gray-400 text-sm">
                        © <?php echo $config['current_year']; ?> <?php echo $config['company_name']; ?>. All rights reserved. | 
                        Transforming Businesses Since 1999
                    </p>
                    <div class="flex justify-center items-center space-x-4 mt-4">
                        <span class="text-gray-400 text-sm">Serving 8 Countries:</span>
                        <div class="flex space-x-2 text-lg">
                            <span title="USA">🇺🇸</span>
                            <span title="UK">🇬🇧</span>
                            <span title="Canada">🇨🇦</span>
                            <span title="Australia">🇦🇺</span>
                            <span title="Ireland">🇮🇪</span>
                            <span title="Germany">🇩🇪</span>
                            <span title="Netherlands">🇳🇱</span>
                            <span title="India">🇮🇳</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Page loading
        window.addEventListener('load', () => {
            const loader = document.getElementById('pageLoader');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-white');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white');
                navbar.classList.add('bg-white/95');
            }
        });

        // Active navigation highlight
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-blue-600');
                link.classList.add('text-gray-700');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('text-gray-700');
                    link.classList.add('text-blue-600');
                }
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe animated elements
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-slide-left, .animate-slide-right');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(el);
            });
        });

        // Enhanced hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Typing effect for title (optional)
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        console.log('🚀 Seyyone PHP Website Loaded Successfully!');
        console.log('📊 Features: Responsive Design, Smooth Animations, Mobile-First');
        console.log('🌐 Ready for Production Deployment');
    </script>
</body>
</html>
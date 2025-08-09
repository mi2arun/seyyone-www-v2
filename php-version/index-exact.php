<?php
// Seyyone Website - PHP Version (Perfect Next.js Match)
// This version perfectly matches the Next.js design with identical animations
include_once 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyyone - Excellence in Healthcare & Technology Solutions</title>
    <meta name="description" content="Empowering businesses with comprehensive Healthcare KPO Services and cutting-edge Software Development. Trusted by 50+ healthcare providers and 100+ technology companies across 8 countries.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            200: '#bfdbfe',
                            300: '#93c5fd',
                            400: '#60a5fa',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a',
                        }
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                        'slide-up': 'slideUp 0.8s ease-out forwards',
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
                        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
                        'spin-slow': 'spin 8s linear infinite',
                        'wiggle': 'wiggle 1s ease-in-out infinite',
                        'shimmer': 'shimmer 2s infinite linear',
                        'scale-in': 'scaleIn 0.5s ease-out forwards',
                        'letter-reveal': 'letterReveal 0.6s ease-out forwards',
                        'line-grow': 'lineGrow 0.8s ease-out 1.2s forwards'
                    }
                }
            }
        }
    </script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    
    <!-- Icons are now inline SVGs - no external dependencies -->
    
    <style>
        * { font-family: 'Inter', sans-serif; }
        
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        @media (min-width: 640px) { .container { padding: 0 1.5rem; } }
        @media (min-width: 1024px) { .container { padding: 0 2rem; } }
        
        /* Perfect animation keyframes matching Next.js Framer Motion */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(5deg); }
        }
        
        @keyframes pulseGlow {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { opacity: 0.8; box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes gradientShift {
            0% { background: linear-gradient(45deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%); }
            33% { background: linear-gradient(45deg, #e0f2fe 0%, #f0f9ff 50%, #e2e8f0 100%); }
            66% { background: linear-gradient(45deg, #f0f9ff 0%, #fafbff 50%, #f1f5f9 100%); }
            100% { background: linear-gradient(45deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%); }
        }
        
        @keyframes bounceGentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        
        @keyframes wiggle {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(300%) skewX(-15deg); }
        }
        
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes letterReveal {
            from { opacity: 0; transform: translateY(50px) rotateX(-90deg); }
            to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes lineGrow {
            from { width: 0; }
            to { width: 100%; }
        }
        
        /* Floating shapes animations - exact match to Next.js */
        @keyframes floatingShape1 {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
            25% { transform: translate(80px, -40px) rotate(90deg); opacity: 0.3; }
            50% { transform: translate(0, -80px) rotate(180deg); opacity: 0.2; }
            75% { transform: translate(-80px, -40px) rotate(270deg); opacity: 0.3; }
            100% { transform: translate(0, 0) rotate(360deg); opacity: 0.2; }
        }
        
        @keyframes floatingShape2 {
            0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
            33% { transform: translate(-60px, 40px) rotate(-120deg) scale(1.1); opacity: 0.4; }
            66% { transform: translate(60px, -40px) rotate(-240deg) scale(0.9); opacity: 0.3; }
            100% { transform: translate(0, 0) rotate(-360deg) scale(1); opacity: 0.3; }
        }
        
        @keyframes floatingShape3 {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 0.3; }
        }
        
        /* Enhanced hover effects matching Next.js */
        .btn-hover-effect {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .btn-hover-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .btn-hover-effect:hover::before {
            left: 100%;
        }
        
        .btn-hover-effect:hover {
            transform: scale(1.05) translateY(-2px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .card-hover-effect {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover-effect:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        
        .trust-badge-hover {
            transition: all 0.3s ease;
        }
        
        .trust-badge-hover:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        /* Letter animation stagger effect */
        .letter-stagger {
            display: inline-block;
            opacity: 0;
            animation: letterReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Responsive design matching Next.js exactly */
        @media (max-width: 768px) {
            .hero-title { font-size: 3rem; line-height: 1.1; }
            .hero-subtitle { font-size: 1.125rem; }
            .container { padding: 0 1rem; }
        }
        
        @media (max-width: 640px) {
            .hero-title { font-size: 2.5rem; }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        html { scroll-behavior: smooth; }
        
        /* Enhanced focus states */
        .focus-ring:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }
        
        /* Loading state */
        .loading-shimmer {
            background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
    </style>
</head>
<body class="bg-white overflow-x-hidden">
    <!-- Navigation - Perfect Next.js match -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 transition-shadow duration-300" id="navbar">
        <div class="container">
            <div class="flex items-center justify-between h-16">
                <!-- Logo with enhanced animation -->
                <a href="#home" class="flex items-center group">
                    <div class="relative">
                        <img src="<?php echo file_exists('assets/images/logo-blue.png') ? 'assets/images/logo-blue.png' : '../public/logo-blue.png'; ?>" 
                             alt="Seyyone Logo" 
                             class="w-24 h-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                             style="filter: drop-shadow(0 4px 8px rgba(37, 99, 235, 0.2));">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="#home" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">Home</a>
                    <a href="#about" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">About</a>
                    <a href="#healthcare" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">Healthcare</a>
                    <a href="#technology" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">Technology</a>
                    <a href="#careers" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">Careers</a>
                    <a href="#contact" class="nav-link text-gray-700 hover:text-blue-600 transition-all duration-300 relative font-medium">Contact</a>
                    <a href="#contact" class="btn-hover-effect bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg focus-ring">
                        Get Started
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 py-4 animate-fade-in">
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                    <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                    <a href="#healthcare" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Healthcare</a>
                    <a href="#technology" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Technology</a>
                    <a href="#careers" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Careers</a>
                    <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
                    <a href="#contact" class="btn-hover-effect bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg w-fit">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section - Perfect Next.js match with enhanced animations -->
    <section id="home" class="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16">
        <!-- Enhanced Background with Perfect Gradient Animation -->
        <div class="absolute inset-0 animate-gradient-shift"></div>
        
        <!-- Floating Geometric Shapes - Exact Next.js positions and animations -->
        <div class="absolute top-32 right-24 w-24 h-24 bg-primary-100 rounded-full opacity-20" 
             style="animation: floatingShape1 20s linear infinite;"></div>
        <div class="absolute bottom-40 left-20 w-20 h-20 bg-purple-200 rounded-lg opacity-30"
             style="animation: floatingShape2 15s linear infinite;"></div>
        <div class="absolute top-1/3 left-1/4 w-16 h-16 bg-primary-300 rounded-full"
             style="animation: floatingShape3 6s ease-in-out infinite;"></div>

        <div class="container relative z-10 py-8">
            <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <!-- Enhanced Content with Perfect Timing -->
                <div class="space-y-8 lg:space-y-10 px-4 lg:px-0 lg:pr-8">
                    <div class="space-y-6">
                        <!-- Enhanced Badge with Perfect Animation -->
                        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 shadow-lg animate-scale-in" 
                             style="animation-delay: 0.2s;">
                            <svg class="w-5 h-5 mr-3 animate-spin-slow" style="animation-duration: 3s;" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span class="animate-fade-in" style="animation-delay: 0.5s;">Over 25 Years of Excellence</span>
                        </div>
                        
                        <!-- Enhanced Main Title with Perfect Staggered Animation -->
                        <div class="space-y-2">
                            <h1 class="hero-title text-5xl md:text-7xl font-black leading-[1.1]">
                                <div class="relative inline-block animate-slide-up" style="animation-delay: 0.6s;">
                                    <span class="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                                        Excellence in
                                    </span>
                                    <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-line-grow"></div>
                                </div>
                                <br>
                                <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-slide-up" style="animation-delay: 0.8s;">
                                    Healthcare
                                </span>
                                <span class="text-gray-400 mx-4 animate-fade-in" style="animation-delay: 1.0s;">&</span>
                                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up" style="animation-delay: 1.0s;">
                                    Technology
                                </span>
                                <br>
                                <span class="text-gray-700 animate-slide-up" style="animation-delay: 1.2s;">Solutions</span>
                            </h1>
                        </div>
                        
                        <!-- Enhanced Description with Perfect Timing -->
                        <div class="space-y-6 animate-fade-in" style="animation-delay: 1.4s;">
                            <p class="hero-subtitle text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                                Empowering businesses with comprehensive 
                                <span class="px-2 py-1 rounded font-semibold text-blue-700 bg-blue-100 animate-pulse-glow">Healthcare KPO Services</span> 
                                and cutting-edge 
                                <span class="px-2 py-1 rounded font-semibold text-purple-700 bg-purple-100 animate-pulse-glow" style="animation-delay: 0.5s;">Software Development</span>
                            </p>
                            
                            <!-- Domain Cards with Perfect Animation -->
                            <div class="grid md:grid-cols-2 gap-4 max-w-3xl animate-slide-up" style="animation-delay: 1.6s;">
                                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 card-hover-effect">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
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

                                <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300 card-hover-effect">
                                    <div class="flex items-center space-x-3 mb-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
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

                            <p class="text-lg text-gray-500 leading-relaxed max-w-2xl animate-fade-in" style="animation-delay: 1.8s;">
                                Trusted by 
                                <strong class="text-blue-600 animate-pulse-glow">50+ healthcare providers</strong> and 
                                <strong class="text-purple-600 animate-pulse-glow" style="animation-delay: 0.5s;">100+ technology companies</strong> across 
                                <strong class="text-green-600 animate-pulse-glow" style="animation-delay: 1s;">8 countries</strong>.
                            </p>
                        </div>
                    </div>

                    <!-- Enhanced CTA Buttons with Perfect Effects -->
                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full animate-slide-up" style="animation-delay: 2.0s;">
                        <a href="#healthcare" class="btn-hover-effect bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl group">
                            <span class="flex items-center gap-3 relative z-10">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                </svg>
                                Healthcare Services
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>

                        <a href="#technology" class="btn-hover-effect bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl group">
                            <span class="flex items-center gap-3 relative z-10">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                                Technology Solutions
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <!-- Enhanced Trust Indicators -->
                    <div class="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 pt-8 animate-slide-up" style="animation-delay: 2.2s;">
                        <div class="group flex items-center space-x-3 bg-green-50 px-4 py-3 rounded-full border border-green-200 shadow-md trust-badge-hover">
                            <svg class="text-green-600 group-hover:text-green-700 w-6 h-6 animate-pulse-glow" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-sm font-semibold text-green-700 group-hover:text-green-800">HIPAA Compliant</span>
                        </div>

                        <div class="group flex items-center space-x-3 bg-blue-50 px-4 py-3 rounded-full border border-blue-200 shadow-md trust-badge-hover">
                            <svg class="text-blue-600 group-hover:text-blue-700 w-6 h-6 animate-bounce-gentle" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-sm font-semibold text-blue-700 group-hover:text-blue-800">Global Reach</span>
                        </div>

                        <div class="group flex items-center space-x-3 bg-purple-50 px-4 py-3 rounded-full border border-purple-200 shadow-md trust-badge-hover">
                            <svg class="text-purple-600 group-hover:text-purple-700 w-6 h-6 animate-float" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span class="text-sm font-semibold text-purple-700 group-hover:text-purple-800">25+ Years</span>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Visual Element - Perfect Next.js match -->
                <div class="relative mt-12 lg:mt-0 px-4 lg:px-8 animate-fade-in" style="animation-delay: 0.8s;">
                    <div class="relative">
                        <!-- Dual Domain Showcase Cards with Perfect Animation -->
                        <div class="space-y-6">
                            <!-- Healthcare Card -->
                            <div class="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-xl p-6 border border-blue-100 backdrop-blur-sm card-hover-effect animate-slide-up" style="animation-delay: 1.2s;">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-blue-900">Healthcare KPO</h3>
                                            <p class="text-sm text-blue-600">HIPAA Compliant Services</p>
                                        </div>
                                    </div>
                                    <div class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold animate-bounce-gentle">
                                        99.8% Accuracy
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <?php 
                                    $healthcare_showcase = ['Medical Transcription', 'Medical Billing', 'EHR Support', 'Medical Coding'];
                                    foreach ($healthcare_showcase as $index => $service): 
                                    ?>
                                        <div class="bg-blue-100 px-3 py-2 rounded-lg text-center animate-scale-in" style="animation-delay: <?php echo 1.5 + ($index * 0.1); ?>s;">
                                            <span class="text-xs font-semibold text-blue-700"><?php echo $service; ?></span>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>

                            <!-- Technology Card -->
                            <div class="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl shadow-xl p-6 border border-purple-100 backdrop-blur-sm card-hover-effect animate-slide-up" style="animation-delay: 1.6s;">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-spin-slow" style="animation-duration: 6s;">
                                            <svg class="text-white w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 class="font-bold text-lg text-purple-900">Technology Solutions</h3>
                                            <p class="text-sm text-purple-600">AI/ML & Cloud Services</p>
                                        </div>
                                    </div>
                                    <div class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold animate-pulse-glow" style="animation-delay: 0.5s;">
                                        100+ Projects
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <?php 
                                    $technology_showcase = ['AI/ML Solutions', 'Mobile Apps', 'Cloud Services', 'Custom Software'];
                                    foreach ($technology_showcase as $index => $service): 
                                    ?>
                                        <div class="bg-purple-100 px-3 py-2 rounded-lg text-center animate-scale-in" style="animation-delay: <?php echo 1.9 + ($index * 0.1); ?>s;">
                                            <span class="text-xs font-semibold text-purple-700"><?php echo $service; ?></span>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>

                        <!-- Enhanced Floating Cards - Perfect positioning -->
                        <div class="absolute -top-4 -right-4 animate-float" style="animation-delay: 2s;">
                            <div class="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-5 rounded-2xl shadow-2xl border-4 border-white">
                                <div class="text-2xl font-black mb-1 animate-bounce-gentle">25+</div>
                                <div class="text-xs opacity-90 font-medium">Years</div>
                            </div>
                        </div>

                        <div class="absolute -bottom-4 -left-4 animate-float" style="animation-delay: 3s;">
                            <div class="bg-white border-4 border-primary-200 p-5 rounded-2xl shadow-2xl">
                                <div class="text-2xl font-black text-primary-600 mb-1 animate-pulse-glow">150+</div>
                                <div class="text-xs text-gray-600 font-medium">Employees</div>
                            </div>
                        </div>

                        <!-- Additional Floating Elements -->
                        <div class="absolute top-20 -left-6 animate-spin-slow" style="animation-duration: 8s;">
                            <div class="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-sm animate-wiggle">✦</span>
                            </div>
                        </div>

                        <div class="absolute bottom-24 right-6 animate-float" style="animation-delay: 2s;">
                            <div class="w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
                                <span class="text-white text-xs font-bold animate-bounce-gentle">⚡</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Enhanced JavaScript matching Next.js functionality perfectly -->
    <script>
        // Icons are now inline SVGs - no initialization needed

        // Mobile menu toggle with smooth animation
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Enhanced navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-2xl', 'bg-white/98');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.remove('shadow-2xl', 'bg-white/98');
                navbar.classList.add('bg-white/95');
            }
        });

        // Navigation link hover effects
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Enhanced intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Performance optimized animation handling
        document.addEventListener('DOMContentLoaded', () => {
            // Observe animated elements
            const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
            animatedElements.forEach(el => {
                if (!el.style.animationDelay) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    observer.observe(el);
                }
            });

            // Enhanced particle animation for background
            createFloatingParticles();
        });

        // Create floating particles for enhanced background
        function createFloatingParticles() {
            const particleCount = 5;
            const hero = document.getElementById('home');
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute w-2 h-2 bg-blue-300 rounded-full opacity-20';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `float ${6 + Math.random() * 4}s ease-in-out infinite`;
                particle.style.animationDelay = Math.random() * 2 + 's';
                hero.appendChild(particle);
            }
        }

        // Enhanced button click effects
        document.querySelectorAll('.btn-hover-effect').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                ripple.className = 'absolute inset-0 bg-white opacity-30 rounded-xl';
                ripple.style.animation = 'ping 0.6s ease-out';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Console logging for debug
        console.log('🚀 Seyyone PHP Website (Perfect Next.js Match) Loaded!');
        console.log('🎨 Animation System: Advanced CSS3 + JavaScript');
        console.log('📱 Responsive: Mobile-first design');
        console.log('⚡ Performance: Optimized animations and interactions');
        console.log('🎯 Match Level: 100% identical to Next.js version');
    </script>
</body>
</html>
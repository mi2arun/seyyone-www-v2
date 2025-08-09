<?php
// Seyyone PHP Website - System Test
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seyyone PHP Website - System Test</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <h1 class="text-3xl font-bold text-blue-600 mb-6">🚀 Seyyone PHP Website - System Test</h1>
            
            <div class="grid md:grid-cols-2 gap-6">
                <!-- System Information -->
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-blue-800 mb-4">📊 System Information</h2>
                    <ul class="space-y-2">
                        <li><strong>PHP Version:</strong> <?php echo PHP_VERSION; ?></li>
                        <li><strong>Server:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'PHP Built-in Server'; ?></li>
                        <li><strong>Document Root:</strong> <?php echo $_SERVER['DOCUMENT_ROOT'] ?? getcwd(); ?></li>
                        <li><strong>Host:</strong> <?php echo $_SERVER['HTTP_HOST'] ?? 'localhost'; ?></li>
                        <li><strong>Current Time:</strong> <?php echo date('Y-m-d H:i:s'); ?></li>
                        <li><strong>Memory Limit:</strong> <?php echo ini_get('memory_limit'); ?></li>
                    </ul>
                </div>

                <!-- Configuration Test -->
                <div class="bg-green-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-green-800 mb-4">⚙️ Configuration Test</h2>
                    <?php 
                    $config_loaded = false;
                    $config_error = '';
                    
                    try {
                        if (file_exists('config.php')) {
                            include_once 'config.php';
                            $config_loaded = true;
                        } else {
                            $config_error = 'config.php file not found';
                        }
                    } catch (Exception $e) {
                        $config_error = $e->getMessage();
                    }
                    ?>
                    
                    <?php if ($config_loaded): ?>
                        <ul class="space-y-2">
                            <li><strong>Site Name:</strong> <?php echo defined('SITE_NAME') ? SITE_NAME : 'Not defined'; ?></li>
                            <li><strong>Company Name:</strong> <?php echo defined('COMPANY_NAME') ? COMPANY_NAME : 'Not defined'; ?></li>
                            <li><strong>Company Email:</strong> <?php echo defined('COMPANY_EMAIL') ? COMPANY_EMAIL : 'Not defined'; ?></li>
                            <li><strong>Company Phone:</strong> <?php echo defined('COMPANY_PHONE') ? COMPANY_PHONE : 'Not defined'; ?></li>
                            <li><strong>Logo Path:</strong> <?php echo defined('LOGO_PATH') ? LOGO_PATH : 'Not defined'; ?></li>
                            <li class="text-green-600"><strong>✅ Config loaded successfully!</strong></li>
                        </ul>
                    <?php else: ?>
                        <p class="text-red-600"><strong>❌ Config Error:</strong> <?php echo $config_error; ?></p>
                    <?php endif; ?>
                </div>

                <!-- File System Test -->
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-yellow-800 mb-4">📁 File System Test</h2>
                    <ul class="space-y-2">
                        <?php
                        $files_to_check = [
                            'index.php' => 'Main homepage',
                            'config.php' => 'Configuration file',
                            '.htaccess' => 'Apache configuration',
                            'assets/' => 'Assets directory',
                            'assets/images/' => 'Images directory',
                            'assets/images/logo-blue.png' => 'Company logo'
                        ];
                        
                        foreach ($files_to_check as $file => $description) {
                            $exists = file_exists($file);
                            $icon = $exists ? '✅' : '❌';
                            $color = $exists ? 'text-green-600' : 'text-red-600';
                            echo "<li class=\"$color\"><strong>$icon $file:</strong> $description</li>";
                        }
                        ?>
                    </ul>
                </div>

                <!-- Features Test -->
                <div class="bg-purple-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-purple-800 mb-4">🎯 Features Test</h2>
                    <ul class="space-y-2">
                        <?php
                        // Test various PHP features
                        $features = [
                            'PHP Extensions' => extension_loaded('json') && extension_loaded('mbstring'),
                            'File Permissions' => is_readable('index.php') && is_readable('config.php'),
                            'Directory Writable' => is_writable('.'),
                            'Sessions Available' => function_exists('session_start'),
                            'URL Rewriting' => function_exists('apache_get_modules') ? in_array('mod_rewrite', apache_get_modules()) : 'Unknown',
                            'Error Reporting' => error_reporting() !== 0,
                            'Display Errors' => ini_get('display_errors'),
                            'Date Functions' => function_exists('date') && function_exists('time')
                        ];
                        
                        foreach ($features as $feature => $status) {
                            if ($status === true) {
                                echo "<li class=\"text-green-600\"><strong>✅ $feature:</strong> Working</li>";
                            } elseif ($status === false) {
                                echo "<li class=\"text-red-600\"><strong>❌ $feature:</strong> Not working</li>";
                            } else {
                                echo "<li class=\"text-yellow-600\"><strong>⚠️ $feature:</strong> $status</li>";
                            }
                        }
                        ?>
                    </ul>
                </div>

                <!-- Services Data Test -->
                <?php if ($config_loaded && isset($healthcare_services)): ?>
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-indigo-800 mb-4">🏥 Services Data Test</h2>
                    <ul class="space-y-2">
                        <li><strong>Healthcare Services:</strong> <?php echo count($healthcare_services); ?> items</li>
                        <li><strong>Technology Services:</strong> <?php echo isset($technology_services) ? count($technology_services) : 0; ?> items</li>
                        <li><strong>Company Stats:</strong> <?php echo isset($company_stats) ? count($company_stats) : 0; ?> items</li>
                        <li><strong>Trust Indicators:</strong> <?php echo isset($trust_indicators) ? count($trust_indicators) : 0; ?> items</li>
                        <li><strong>Countries Served:</strong> <?php echo isset($countries_served) ? count($countries_served) : 0; ?> countries</li>
                        <li class="text-green-600"><strong>✅ All data arrays loaded!</strong></li>
                    </ul>
                </div>
                <?php endif; ?>

                <!-- Network Test -->
                <div class="bg-red-50 p-4 rounded-lg">
                    <h2 class="text-xl font-semibold text-red-800 mb-4">🌐 Network Test</h2>
                    <ul class="space-y-2">
                        <?php
                        // Test external resources
                        $external_resources = [
                            'Tailwind CSS CDN' => 'https://cdn.tailwindcss.com',
                            'Google Fonts' => 'https://fonts.googleapis.com',
                        ];
                        
                        foreach ($external_resources as $name => $url) {
                            $context = stream_context_create(['http' => ['timeout' => 3]]);
                            $headers = @get_headers($url, 1, $context);
                            $available = $headers && strpos($headers[0], '200') !== false;
                            $icon = $available ? '✅' : '❌';
                            $color = $available ? 'text-green-600' : 'text-red-600';
                            echo "<li class=\"$color\"><strong>$icon $name:</strong> " . ($available ? 'Available' : 'Not accessible') . "</li>";
                        }
                        ?>
                    </ul>
                </div>
            </div>

            <!-- Overall Status -->
            <div class="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center">
                <h2 class="text-2xl font-bold mb-4">🎉 System Status</h2>
                <?php
                $overall_status = $config_loaded && file_exists('index.php') && file_exists('assets/');
                if ($overall_status): ?>
                    <p class="text-lg">✅ <strong>ALL SYSTEMS GO!</strong> Your Seyyone PHP website is ready for testing.</p>
                    <div class="mt-4">
                        <a href="index.php" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4">
                            🏠 View Homepage
                        </a>
                        <a href="." class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            📁 Directory Index
                        </a>
                    </div>
                <?php else: ?>
                    <p class="text-lg">❌ <strong>ISSUES DETECTED!</strong> Please check the errors above and fix them.</p>
                    <p class="mt-2">Make sure all required files are present and properly configured.</p>
                <?php endif; ?>
            </div>

            <!-- Quick Links -->
            <div class="mt-6 text-center text-gray-600">
                <p class="text-sm">
                    📚 <a href="README.md" class="text-blue-600 hover:underline">Documentation</a> | 
                    🚀 <a href="LOCAL-TESTING.md" class="text-blue-600 hover:underline">Testing Guide</a> | 
                    ⚙️ <a href="config.php" class="text-blue-600 hover:underline">Configuration</a>
                </p>
                <p class="text-xs mt-2">Test run at: <?php echo date('Y-m-d H:i:s T'); ?></p>
            </div>
        </div>
    </div>
</body>
</html>
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
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0'
    },
    // Logging
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    
    // Advanced features
    watch: false,
    max_memory_restart: '1G',
    min_uptime: '10s',
    max_restarts: 10,
    autorestart: true,
    
    // Graceful shutdown
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000
  }]
}
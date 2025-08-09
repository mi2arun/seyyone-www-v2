#!/bin/bash

# 👤 Create Deployment User with Sudo Powers
# Run this script as root to create a dedicated deployment user

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Check if running as root
check_root() {
    if [[ $EUID -ne 0 ]]; then
        print_error "This script must be run as root!"
        print_status "Run with: sudo ./create-deploy-user.sh"
        exit 1
    fi
}

# Get username and password
get_user_info() {
    USERNAME="${1:-deploy}"
    
    if [ -z "$1" ]; then
        echo ""
        print_status "👤 Creating Deployment User"
        echo ""
        read -p "Enter username (default: deploy): " input_username
        USERNAME="${input_username:-deploy}"
    fi
    
    echo ""
    print_status "Creating user: $USERNAME"
}

# Check if user exists
check_user_exists() {
    if id "$USERNAME" &>/dev/null; then
        print_warning "User '$USERNAME' already exists!"
        read -p "Do you want to continue and update permissions? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "Exiting..."
            exit 0
        fi
        USER_EXISTS=true
    else
        USER_EXISTS=false
    fi
}

# Create user
create_user() {
    if [ "$USER_EXISTS" = false ]; then
        print_status "Creating user '$USERNAME'..."
        
        # Create user with home directory
        useradd -m -s /bin/bash "$USERNAME"
        
        if [ $? -eq 0 ]; then
            print_success "User '$USERNAME' created successfully!"
        else
            print_error "Failed to create user '$USERNAME'"
            exit 1
        fi
        
        # Set password
        print_status "Setting password for '$USERNAME'..."
        
        # Option 1: Generate random password
        RANDOM_PASSWORD=$(openssl rand -base64 12)
        echo "$USERNAME:$RANDOM_PASSWORD" | chpasswd
        
        print_success "Random password set for '$USERNAME': $RANDOM_PASSWORD"
        print_warning "Save this password securely or set up SSH keys immediately!"
        
        # Option 2: Uncomment this to prompt for password instead
        # passwd "$USERNAME"
    else
        print_status "User '$USERNAME' already exists, skipping creation..."
    fi
}

# Add to sudo group
setup_sudo() {
    print_status "Adding '$USERNAME' to sudo group..."
    
    usermod -aG sudo "$USERNAME"
    
    if [ $? -eq 0 ]; then
        print_success "User '$USERNAME' added to sudo group!"
    else
        print_error "Failed to add user to sudo group"
        exit 1
    fi
}

# Setup Docker permissions
setup_docker() {
    print_status "Setting up Docker permissions for '$USERNAME'..."
    
    # Check if docker group exists
    if ! getent group docker > /dev/null 2>&1; then
        print_status "Creating docker group..."
        groupadd docker
    fi
    
    # Add user to docker group
    usermod -aG docker "$USERNAME"
    
    if [ $? -eq 0 ]; then
        print_success "User '$USERNAME' added to docker group!"
    else
        print_error "Failed to add user to docker group"
    fi
}

# Setup SSH key (optional)
setup_ssh() {
    print_status "Setting up SSH directory for '$USERNAME'..."
    
    USER_HOME=$(eval echo ~$USERNAME)
    SSH_DIR="$USER_HOME/.ssh"
    
    # Create .ssh directory
    mkdir -p "$SSH_DIR"
    chown "$USERNAME:$USERNAME" "$SSH_DIR"
    chmod 700 "$SSH_DIR"
    
    # Create authorized_keys file
    touch "$SSH_DIR/authorized_keys"
    chown "$USERNAME:$USERNAME" "$SSH_DIR/authorized_keys"
    chmod 600 "$SSH_DIR/authorized_keys"
    
    print_success "SSH directory created at $SSH_DIR"
    print_status "Add your public key to: $SSH_DIR/authorized_keys"
}

# Setup deployment directory
setup_deploy_dir() {
    print_status "Setting up deployment directory..."
    
    DEPLOY_DIR="/home/$USERNAME/deployments"
    
    # Create deployment directory
    mkdir -p "$DEPLOY_DIR"
    chown "$USERNAME:$USERNAME" "$DEPLOY_DIR"
    chmod 755 "$DEPLOY_DIR"
    
    # Create logs directory
    mkdir -p "$DEPLOY_DIR/logs"
    chown "$USERNAME:$USERNAME" "$DEPLOY_DIR/logs"
    chmod 755 "$DEPLOY_DIR/logs"
    
    print_success "Deployment directory created at $DEPLOY_DIR"
}

# Configure sudo permissions (passwordless for deployment tasks)
setup_sudo_config() {
    print_status "Configuring sudo permissions for deployment tasks..."
    
    SUDOERS_FILE="/etc/sudoers.d/${USERNAME}-deploy"
    
    cat > "$SUDOERS_FILE" << EOF
# Deployment sudo permissions for $USERNAME
# Allow specific commands without password for deployment

# Apache2 management
$USERNAME ALL=(ALL) NOPASSWD: /bin/systemctl start apache2
$USERNAME ALL=(ALL) NOPASSWD: /bin/systemctl stop apache2
$USERNAME ALL=(ALL) NOPASSWD: /bin/systemctl restart apache2
$USERNAME ALL=(ALL) NOPASSWD: /bin/systemctl reload apache2
$USERNAME ALL=(ALL) NOPASSWD: /bin/systemctl status apache2

# Apache2 configuration
$USERNAME ALL=(ALL) NOPASSWD: /usr/sbin/a2ensite *
$USERNAME ALL=(ALL) NOPASSWD: /usr/sbin/a2dissite *
$USERNAME ALL=(ALL) NOPASSWD: /usr/sbin/a2enmod *
$USERNAME ALL=(ALL) NOPASSWD: /usr/sbin/apache2ctl configtest

# SSL/Certbot management
$USERNAME ALL=(ALL) NOPASSWD: /usr/bin/certbot
$USERNAME ALL=(ALL) NOPASSWD: /bin/crontab -e
$USERNAME ALL=(ALL) NOPASSWD: /bin/crontab -l

# Package management (for setup only)
$USERNAME ALL=(ALL) NOPASSWD: /usr/bin/apt update
$USERNAME ALL=(ALL) NOPASSWD: /usr/bin/apt install *
$USERNAME ALL=(ALL) NOPASSWD: /usr/bin/apt upgrade

# File permissions for web directories
$USERNAME ALL=(ALL) NOPASSWD: /bin/chown -R $USERNAME\\:$USERNAME /var/www/*
$USERNAME ALL=(ALL) NOPASSWD: /bin/chmod -R 755 /var/www/*

# Log file access
$USERNAME ALL=(ALL) NOPASSWD: /usr/bin/tail -f /var/log/apache2/*
$USERNAME ALL=(ALL) NOPASSWD: /bin/cat /var/log/apache2/*
EOF
    
    # Set proper permissions
    chmod 440 "$SUDOERS_FILE"
    
    # Validate sudoers file
    if visudo -c -f "$SUDOERS_FILE"; then
        print_success "Sudo configuration created successfully!"
    else
        print_error "Invalid sudoers configuration!"
        rm "$SUDOERS_FILE"
        exit 1
    fi
}

# Create deployment script shortcut
create_shortcuts() {
    print_status "Creating deployment shortcuts..."
    
    USER_HOME=$(eval echo ~$USERNAME)
    BASHRC="$USER_HOME/.bashrc"
    
    # Add useful aliases
    cat >> "$BASHRC" << 'EOF'

# Deployment aliases
alias deploy-logs='tail -f ~/deployments/logs/deploy.log'
alias apache-logs='sudo tail -f /var/log/apache2/seyyone_*.log'
alias docker-logs='docker compose logs -f'
alias deploy-status='docker compose ps && sudo systemctl status apache2'
alias deploy-restart='docker compose restart && sudo systemctl restart apache2'

# Deployment functions
deploy-check() {
    echo "🔍 Deployment Status Check"
    echo "=========================="
    echo "📦 Docker Status:"
    docker compose ps
    echo ""
    echo "🌐 Apache2 Status:"
    sudo systemctl status apache2 --no-pager --lines=3
    echo ""
    echo "🔒 SSL Certificates:"
    sudo certbot certificates 2>/dev/null || echo "No certificates found"
    echo ""
    echo "🚀 Website Test:"
    curl -I http://localhost:3000 2>/dev/null && echo "✅ Next.js: OK" || echo "❌ Next.js: Failed"
}

export PATH="$PATH:~/deployments"
EOF
    
    chown "$USERNAME:$USERNAME" "$BASHRC"
    
    print_success "Shortcuts added to .bashrc"
}

# Test user setup
test_user() {
    print_status "Testing user setup..."
    
    # Test sudo access
    if sudo -u "$USERNAME" sudo -l > /dev/null 2>&1; then
        print_success "✅ Sudo access: Working"
    else
        print_warning "⚠️  Sudo access: Check configuration"
    fi
    
    # Test docker access
    if sudo -u "$USERNAME" docker ps > /dev/null 2>&1; then
        print_success "✅ Docker access: Working"
    else
        print_warning "⚠️  Docker access: User needs to logout/login"
    fi
    
    # Test home directory
    USER_HOME=$(eval echo ~$USERNAME)
    if [ -d "$USER_HOME" ]; then
        print_success "✅ Home directory: $USER_HOME"
    else
        print_error "❌ Home directory: Not found"
    fi
}

# Show final instructions
show_instructions() {
    USER_HOME=$(eval echo ~$USERNAME)
    
    print_success "🎉 Deployment User Setup Complete!"
    echo ""
    echo "👤 User Information:"
    echo "   • Username: $USERNAME"
    echo "   • Home Directory: $USER_HOME"
    echo "   • Groups: sudo, docker"
    echo ""
    echo "🔑 SSH Setup:"
    echo "   • SSH Directory: $USER_HOME/.ssh"
    echo "   • Add your public key to: $USER_HOME/.ssh/authorized_keys"
    echo ""
    echo "📁 Deployment Directory:"
    echo "   • Location: $USER_HOME/deployments"
    echo "   • Logs: $USER_HOME/deployments/logs"
    echo ""
    echo "🚀 Next Steps:"
    echo "   1. Switch to deployment user: sudo su - $USERNAME"
    echo "   2. Copy your project to: $USER_HOME/deployments/"
    echo "   3. Run deployment: ./deploy-production.sh"
    echo ""
    echo "📝 Useful Commands (as $USERNAME):"
    echo "   • deploy-check     - Check deployment status"
    echo "   • deploy-logs      - View deployment logs"
    echo "   • apache-logs      - View Apache logs"
    echo "   • docker-logs      - View Docker logs"
    echo ""
    echo "🔄 To switch to deployment user:"
    echo "   sudo su - $USERNAME"
}

# Main execution
main() {
    print_status "🛠️  Creating Deployment User..."
    
    check_root
    get_user_info "$1"
    check_user_exists
    create_user
    setup_sudo
    setup_docker
    setup_ssh
    setup_deploy_dir
    setup_sudo_config
    create_shortcuts
    test_user
    
    echo ""
    show_instructions
    
    print_success "✅ Deployment user '$USERNAME' is ready!"
}

# Run main function
main "$@"
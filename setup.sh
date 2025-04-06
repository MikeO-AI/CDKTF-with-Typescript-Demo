#!/bin/bash

# Function to install Python packages
install_python_packages() {
    echo "Installing Python packages..."
    pip install boto3 azure-identity google-cloud-storage pymongo snowflake-connector-python requests
    echo "Python packages installed successfully."
}

# Function to install Node.js packages
install_node_packages() {
    echo "Installing Node.js packages..."
    cdktf init --template=python
    echo "Node.js packages installed successfully."
}

# Function to display options to the user
display_options() {
    echo "What would you like to accomplish?"
    echo "1. Install Python SDKs"
    echo "2. Install Node.js packages for CDKTF"
    echo "3. Exit"
}

# Main script logic
while true; do
    display_options
    read -p "Please select an option (1-3): " option

    case $option in
        1)
            install_python_packages
            ;;
        2)
            install_node_packages
            ;;
        3)
            echo "Exiting..."
            exit 0
            ;;
        *)
            echo "Invalid option. Please try again."
            ;;
    esac
done
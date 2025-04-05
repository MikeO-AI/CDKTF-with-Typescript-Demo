#!/bin/bash

# Define an array of directories in the order you want to synthesize
declare -a directories=(
    "cdktf-aws"        # Infrastructure
    "cdktf-azure"      # Infrastructure
    "cdktf-google"     # Infrastructure
    "cdktf-kubernetes"  # Kubernetes
    "cdktf-cloudflare"  # DNS
    "cdktf-docker"      # Services
    "cdktf-postgresql"   # Services
    "cdktf-mongodbatlas" # Services
    "cdktf-snowflake"    # Services
    "cdktf-databricks"   # Services
)

# Loop through each directory and run the synth command
for dir in "${directories[@]}"; do
    echo "Synthesizing in $dir..."
    (cd "$dir" && yarn cdktf synth)
    if [ $? -ne 0 ]; then
        echo "Error occurred while synthesizing in $dir. Exiting."
        exit 1
    fi
done

echo "All synth commands executed successfully."
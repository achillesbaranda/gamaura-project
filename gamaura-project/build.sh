#!/bin/bash
set -e

echo "Starting build process..."

# Ensure node_modules/.bin is executable
find node_modules/.bin -type f -exec chmod +x {} \; 2>/dev/null || true

# Run the build
npx react-scripts build

echo "Build completed successfully!"
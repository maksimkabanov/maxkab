#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# 1. Build the project locally
npm run build

# 2. Prepare a clean deployment directory
rm -rf deploy
mkdir deploy

# 3. Copy standalone core files to root of deploy directory
# This includes server.js and node_modules
cp -r .next/standalone/. ./deploy/

# 4. Copy static assets into the correct locations
# Next.js standalone requires these to serve images and static chunks
cp -r public ./deploy/public
cp -r .next/static ./deploy/.next/static

# 5. Copy the production Dockerfile into the deploy directory
cp Dockerfile ./deploy/Dockerfile

echo "Success! The deployment package is ready in the './deploy' directory."
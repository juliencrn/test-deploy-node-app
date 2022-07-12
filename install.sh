#!/bin/bash
#
# Install Linux tools and 
# dependencies to run a NodeJS app
#

# Download node source package archive and install nodejs
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get update && sudo apt-get install -y nodejs git
node -v

# Install the project
git clone https://github.com/algo-trading-bots/express-app
cd express-app
npm install

# Start the app
npm run start

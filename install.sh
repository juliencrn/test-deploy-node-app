#!/bin/bash
#
# Install Linux tools and 
# dependencies to run a NodeJS app
#

# Download node source package archive and install nodejs
 if which node > /dev/null
    then
        echo "node is installed, skipping..."
    else
        # add deb.nodesource repo commands 
        # install node
        curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
        sudo apt-get update && sudo apt-get install -y nodejs git
        node -v
    fi

node -v
npm -v

# Install pm2 (process manager)
rm -rf /usr/lib/node_modules/pm2
npm install pm2@latest --location=global
pm2 update

# Install the project
git clone git@github.com:algo-trading-bots/express-app.git
cd express-app
npm install

# Start the app
PORT=8001 pm2 start index.js --name bot1 --no-autorestart
PORT=8002 pm2 start index.js --name bot2 --no-autorestart
PORT=8003 pm2 start index.js --name bot3 --no-autorestart
# npm run start

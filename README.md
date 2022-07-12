# How to deploy a nodejs app in a DigitalOcean droplet?

- `ecosystem.config.js`: PM2 monitoring config
- `index.js`: Nodejs Express web app that says "Hello World"
- `setup.sh`: Executable that copy and launch the install script in the droplet using SSH
- `install.sh`: Install the dependencies on the server

## Deploy

```sh
# go in the project dir
cd ../path/to/this/folder

# make the script executable
chmod +x ./setup.sh

# Deploy
./setup.sh {droplet_ip}
# eg: ./setup.sh 157.245.78.51
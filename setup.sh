#!/bin/bash
#
# Setting up a DigitalOcean Droplet
# with basic nodejs stack
#

# IP Address of the droplet as parameter
DROPLET_IP=$1

# Copying the files
scp install.sh root@${DROPLET_IP}:

# Exec the script
ssh -i ~/.ssh/id_rsa_droplet_trading_bot root@${DROPLET_IP} bash /root/install.sh
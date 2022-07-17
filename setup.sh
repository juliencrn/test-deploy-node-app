#!/bin/bash
#
# Setting up a DigitalOcean Droplet
# with basic nodejs stack
#

# IP Address of the droplet as parameter
DROPLET_IP=$1

# Copying the files
scp install.sh root@${DROPLET_IP}:
scp ./.ssh/* root@${DROPLET_IP}:.ssh


# Exec the script
ssh root@${DROPLET_IP} bash /root/install.sh

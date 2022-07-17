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
```

## Managing

Running new bots in the same droplet and monitor it could be done using [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) (ready to use in the droplet console).

The bot is build to work with the `--no-autorestart` flag. Indeed, in case of minor issues, we just send a error message then try the next step.
But in case of major error, could be come with automatized trading bots, we want to completely stop the bot.

```sh
# Example commands:
# start a bot
pm2 start index.js --name bot --no-autorestart
    # Options
    # on dev: --watch, // restart on file change


# monitoring
pm2 monit

# stop/delete
pm2 stop bot
pm2 delete bot
```

## Alert

Alert could be sent using a telegram bot. It was created using [BotFather](https://t.me/BotFather).

It requires a `TELEGRAM_BOT_TOKEN` (via BotFather) and a `TELEGRAM_BOT_CHAT_ID` (from https://api.telegram.org/bo{token}/getUpdates['results'][0]['chat']['id']).
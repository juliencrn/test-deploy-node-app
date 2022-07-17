// Note: This file seems to be not used??
module.exports = {
  apps: [{
    // name: "express-app",
    script: 'index.js',
    // cron_restart: '0 0 * * *',
    watch: true, // restart on file change
    autorestart: false, // we should be able to stop the bot
    time: true,
    env: {
      NODE_ENV: "development",
    },
    emv_production: {
      NODE_ENV: "production",
    }
  }],
};

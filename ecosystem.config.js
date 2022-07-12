module.exports = {
  apps: [{
    name: "express-app",
    script: 'index.js',
    env: {
      NODE_ENV: "development",
    },
    emv_production: {
      NODE_ENV: "production",
    }
  }],
};

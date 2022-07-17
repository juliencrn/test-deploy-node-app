require('dotenv').config()
const axios = require('axios');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_BOT_CHAT_ID = process.env.TELEGRAM_BOT_CHAT_ID
const telegram_url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`

async function sendTelegramMessage(text) {
    return axios.post(`${telegram_url}/sendMessage`, { text, chat_id: TELEGRAM_BOT_CHAT_ID })
}

let counter = 0;

// Fake trading bot
async function tickBot() {
    if (counter == 0) {
        await sendTelegramMessage("🟢 starting bot...")
    }

    try {
        counter += 1
        console.log({ counter });

        // Caught in a try/catch, the error is printed to the pm2 logs
        // and the process continues
        if (counter === 5) {
            throw new Error("counter is 5")
        }

        // Stop the app (using the `--no-autorestart` flag)
        if (counter === 10) {
            await sendTelegramMessage("🔴 Bot will be stop")
            process.exit(1)
        }

    } catch (error) {
        await sendTelegramMessage("🟠 Bot got an error but still continues")
        console.error("got an error", error)
    }
}

setInterval(tickBot, 1000)

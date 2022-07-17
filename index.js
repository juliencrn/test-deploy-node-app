let counter = 0;

// Fake trading bot
function tickBot() {
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
            process.exit(1)
        }

    } catch (error) {
        console.error("got an error", error)
    }
}

setInterval(tickBot, 1000)

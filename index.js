require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});


require("./commands/ping")(app);

(async () => {
    await app.start();
    console.log("Bot is running!");
})();
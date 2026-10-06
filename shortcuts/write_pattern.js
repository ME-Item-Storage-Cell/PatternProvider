module.exports = (app) => {
    app.shortcut("write_pattern", async ({ shortcut, ack }) => {
        await ack();

        console.log(shortcut.message.text);
    });
};
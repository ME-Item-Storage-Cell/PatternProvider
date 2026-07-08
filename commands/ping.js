module.exports = (app) => {
    app.command("/patternprovider-ping", async ({ command, ack, respond }) => {
        const start = Date.now();
        await ack();
        const latency = Date.now() - start;
        await respond({
            text: `Pong!\nLatency: ${latency}ms`
        });
    });
};
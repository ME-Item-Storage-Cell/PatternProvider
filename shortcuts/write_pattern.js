const db = require("../databases/create_table.js");

module.exports = (app) => {
    app.shortcut("write_pattern", async ({ shortcut, ack }) => {
        await ack();

        const pattern_user_id = shortcut.user.id
        const pattern_text = shortcut.message.text

        console.log(pattern_user_id, pattern_text);

        const insertPattern = db.prepare(`
            INSERT INTO patterns (user_id, name, text)
            VALUES (?, ?, ?)
        `);

        insertPattern.run(pattern_user_id, pattern_text, pattern_text)
    });
};
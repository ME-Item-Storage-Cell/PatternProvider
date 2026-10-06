const Database = require("better-sqlite3");

const db = new Database("pattern_provider.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS patterns (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        name TEXT NOT NULL,
        text TEXT
    );

    CREATE TABLE IF NOT EXISTS files (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message_id INTEGER NOT NULL,
        file_id TEXT NOT NULL,
        FOREIGN KEY (message_id) REFERENCES messages(id)
    );
    
`);
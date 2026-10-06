const Database = require("better-sqlite3");

const db = new Database("pattern_provider.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS patterns (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        name TEXT NOT NULL,
        text TEXT, 
        UNIQUE(name, text)
    );

    CREATE TABLE IF NOT EXISTS files (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pattern_id INTEGER NOT NULL,
        file_id TEXT NOT NULL,
        UNIQUE(pattern_id, file_id),
        FOREIGN KEY (pattern_id) REFERENCES patterns(id)
    );
    
`);
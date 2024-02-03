import User from './User'

import { Database as SQL } from 'bun:sqlite'

class Database {
    constructor(FileDB, FileName) {
        this.FileDB = FileDB
        this.FileName = FileName
        this.SQL = new SQL(this.FileName)

    }

    async CreateTables() {
        this.SQL.exec(`
            CREATE TABLE IF NOT EXISTS "Users" (
                "Id"	INTEGER NOT NULL UNIQUE,
                "Username"	TEXT NOT NULL UNIQUE,
                "Email"	TEXT,
                "PasswordHash"	TEXT,
                "Admin"	INTEGER NOT NULL DEFAULT 0,
                "APIKey"	TEXT UNIQUE,
                PRIMARY KEY("Id" AUTOINCREMENT)
            );
        `)

        this.SQL.exec(`
            CREATE TABLE IF NOT EXISTS "Files" (
                "Id"	INTEGER NOT NULL UNIQUE,
                "Hash"	TEXT NOT NULL UNIQUE,
                "FileName"	TEXT NOT NULL,
                "Size"	INTEGER NOT NULL,
                "Uploaded"	INTEGER NOT NULL,
                "Uploader"	INTEGER NOT NULL,
                PRIMARY KEY("Id" AUTOINCREMENT)
            );
        `)

        // Check if admin user exists
        const adminUser = this.SQL.prepare(`SELECT * FROM Users WHERE Id = 1`).get()
        if (!adminUser) {
            // Create admin user
            console.log('Creating admin user...')
            this.SQL.prepare(`INSERT INTO Users (Id, Username, PasswordHash, Admin) VALUES (1, 'admin', $password, 1)`).run(
                {
                    $password: await Bun.password.hash('admin')
                }
            )
        }
    }
}

export default Database
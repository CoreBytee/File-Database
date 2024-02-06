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
                "UploadedDate"	INTEGER NOT NULL,
                "Uploader"	INTEGER NOT NULL,
                PRIMARY KEY("Id" AUTOINCREMENT)
            );
        `)

        // Check if admin user exists
        const AdminUser = await User.FromId(1)
        if (!AdminUser) {
            console.log('Creating admin user...')
            await User.Create('admin', 'admin', null, true, 1)
        }
    }
}

export default Database
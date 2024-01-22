class Database {
    constructor(FileDB, FileName) {
        this.FileDB = FileDB
        this.FileName = FileName
    async CreateTables() {
        this.SQL.exec(`
            CREATE TABLE IF NOT EXISTS "Users" (
                "Id"	INTEGER NOT NULL UNIQUE,
                "Username"	TEXT NOT NULL UNIQUE,
                "PasswordHash"	TEXT,
                "Admin"	INTEGER NOT NULL DEFAULT 0,
                PRIMARY KEY("Id" AUTOINCREMENT)
            );
        `)

        // Check if admin user exists
        const adminUser = this.SQL.prepare(`SELECT * FROM Users WHERE Id = 1`).get()
        if (!adminUser) {
            // Create admin user
            console.log('Creating admin user...')
            this.SQL.prepare(`INSERT INTO Users (Id, Username, PasswordHash) VALUES (1, 'admin', $password)`).run(
                {
                    $password: await Bun.password.hash('admin')
                }
            )
        }
    }
    }
}

export default Database
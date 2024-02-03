import { Database } from "bun:sqlite"

class User {
    static SQL = new Database("./FileDB.sqlite")
    constructor(Data) {
        this.Data = Data
    }

    static async FromId(Id) {
        const Data = await User.SQL.prepare(`SELECT * FROM Users WHERE Id = $id`).get(
            {
                $id: Id
            }
        )
        if (!Data) return null
        return new User(Data)
    }

    static async FromUsername(Username) {
        const Data = await User.SQL.prepare(`SELECT * FROM Users WHERE Username = $username`).get(
            {
                $username: Username
            }
        )
        if (!Data) return null
        return new User(Data)
    }

    async CheckPassword(Password) {
        return await Bun.password.verify(Password, this.Data.PasswordHash)
    }

    get Id() {
        return this.Data.Id
    }

    get Username() {
        return this.Data.Username
    }

    get Email() {
        return this.Data.Email
    }

    get Admin() {
        return !!this.Data.Admin
    }
}

export default User
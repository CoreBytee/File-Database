import { Database } from "bun:sqlite"

class User {
    static SQL = new Database("./FileDB.sqlite")
    constructor(Data) {
        this.Data = Data
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
}

export default User
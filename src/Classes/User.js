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

    async SetPassword(Password) {
        const Hash = await Bun.password.hash(Password)
        this.Data.PasswordHash = Hash
        await User.SQL.prepare(`UPDATE Users SET PasswordHash = $hash WHERE Id = $id`).run(
            {
                $hash: Hash,
                $id: this.Id
            }
        )
    }

    get Id() {
        return this.Data.Id
    }

    get Username() {
        return this.Data.Username
    }

    async SetUsername(Username) {
        this.Data.Username = Username
        await User.SQL.prepare(`UPDATE Users SET Username = $username WHERE Id = $id`).run(
            {
                $username: Username,
                $id: this.Id
            }
        )
    }

    get Email() {
        return this.Data.Email
    }

    async SetEmail(Email) {
        this.Data.Email = Email
        await User.SQL.prepare(`UPDATE Users SET Email = $email WHERE Id = $id`).run(
            {
                $email: Email,
                $id: this.Id
            }
        )
    }

    get Admin() {
        return !!this.Data.Admin
    }

    async SetAdmin(Admin) {
        this.Data.Admin = Admin
        await User.SQL.prepare(`UPDATE Users SET Admin = $admin WHERE Id = $id`).run(
            {
                $admin: Admin,
                $id: this.Id
            }
        )
    }

    get APIKey() {
        return this.Data.APIKey
    }

    async SetAPIKey(APIKey) {
        this.Data.APIKey = APIKey
        await User.SQL.prepare(`UPDATE Users SET APIKey = $apikey WHERE Id = $id`).run(
            {
                $apikey: APIKey,
                $id: this.Id
            }
        )
    }

    get Gravatar() {
        const Email = (this.Email || "admin@example.com").trim().toLowerCase()
        const Hasher = new Bun.CryptoHasher("sha256")
        Hasher.update(Email)
        return `https://www.gravatar.com/avatar/${Hasher.digest("hex")}?s=512&d=retro`
    }
}

export default User
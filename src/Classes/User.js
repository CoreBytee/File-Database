class User {
    constructor(FileDB, SQL, Data) {
        this.FileDB = FileDB
        this.SQL = SQL
        this.Data = Data
    }

    async CheckPassword(Password) {
        return await Bun.password.verify(Password, this.Data.PasswordHash)
    }
}

export default User
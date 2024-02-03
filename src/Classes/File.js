import { Database } from "bun:sqlite"

class File {
    static SQL = new Database("./FileDB.sqlite")
    constructor(Data) {
        this.Data = Data
    }

    static async FromId(Id) {
        const Data = await File.SQL.prepare(`SELECT * FROM Files WHERE Id = $id`).get(
            {
                $id: Id
            }
        )
        if (!Data) return null
        return new File(Data)
    }

}

export default File
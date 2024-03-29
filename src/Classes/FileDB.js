import Database from "./Database"
import Webserver from "./Webserver"
import FS from "fs"

class FileDB {
    constructor(Port) {
        this.Database = new Database(this, "./FileDB.sqlite")
        this.Database.CreateTables()

        this.Webserver = new Webserver(Port, this)
        this.Webserver.Routes()
        this.Webserver.Listen()

        FS.mkdirSync("./Files", { recursive: true })
    }
}

export default FileDB
export { FileDB }
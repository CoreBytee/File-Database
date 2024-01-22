import Database from "./Database"
import Webserver from "./Webserver"

class FileDB {
    constructor(Port) {
        this.Database = new Database(this, "./FileDB")
        this.Webserver = new Webserver(Port, this)
        this.Webserver.Routes()
        this.Webserver.Listen()
    }
}

export default FileDB
export { FileDB }
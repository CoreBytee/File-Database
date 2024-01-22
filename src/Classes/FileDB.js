import Database from "./Database"
import Webserver from "./Webserver"

class FileDB {
    constructor(Port) {
        this.Database = new Database()
        this.Webserver = new Webserver(Port)
        this.Webserver.Listen()
    }
}

export default FileDB
export { FileDB }
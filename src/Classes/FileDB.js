import Database from "./Database"

class FileDB {
    constructor(Port) {
        this.Database = new Database()
    }
}

export default FileDB
export { FileDB }
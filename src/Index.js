import { FileDB as FileDBClass } from "./Classes/FileDB.js"

const FileDB = new FileDBClass(Number(Bun.env.PORT))
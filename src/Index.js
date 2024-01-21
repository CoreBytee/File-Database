import { DataBaseClass } from "./Classes/DataBaseClass.js"

global.FileDB = {}
FileDB.DataBase = new DataBaseClass("./FileDB.db")

require("./Server/index.js")
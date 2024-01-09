const DataBaseClass = require("./lib/DataBaseClass.js")

global.FileDB = {}
FileDB.DataBase = new DataBaseClass("./FileDB.db")
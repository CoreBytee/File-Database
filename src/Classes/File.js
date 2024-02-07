import { CryptoHasher } from "bun"
import { Database } from "bun:sqlite"
import { extname } from "path"
import textExtensions from "text-extensions"
import imageExtensions from "image-extensions"
import videoExtensions from "video-extensions"
import User from "./User"
import mime from "mime"
import ReadableSize from "../Helpers/ReadableSize"

class File {
    static SQL = new Database("./FileDB.sqlite")
    constructor(Data) {
        this.Data = Data
        this.Extention = extname(this.Data.FileName).slice(1)
    }

    static async Create(FileData, FileName, User) {
        const Hash = CryptoHasher.hash("md5", FileData, "hex")
        const Size = FileData.size

        const ExistingFile = await File.FromHash(Hash)
        if (ExistingFile) { return ExistingFile }

        await File.SQL.prepare(`INSERT INTO Files (Hash, FileName, Size, UploadDate, Uploader) VALUES ($hash, $filename, $size, $date, $uploader)`).run(
            {
                $hash: Hash,
                $filename: FileName,
                $size: Size,
                $date: Date.now(),
                $uploader: User.Id
            }
        )

        Bun.write(
            Bun.file(`./Files/${Hash}`),
            FileData
        )

        return await File.FromHash(Hash)
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

    static async FromHash(Hash) {
        const Data = await File.SQL.prepare(`SELECT * FROM Files WHERE Hash = $hash`).get(
            {
                $hash: Hash
            }
        )
        if (!Data) return null
        return new File(Data)
    }

    async GetFilePath() {
        return `./Files/${this.Data.Hash}`
    }

    async GetUser() {
        return await User.FromId(this.Data.Uploader)
    }

    get Name() {
        return this.Data.FileName
    }

    get Size() {
        return this.Data.Size
    }

    get ReadableSize() {
        return ReadableSize(this.Size)
    }

    get ShortUploadDate() {
        return new Date(this.Data.UploadDate).toLocaleDateString()
    }

    get DisplayType() {
        if (imageExtensions.includes(this.Extention)) { return "image" }
        if (textExtensions.includes(this.Extention)) { return "text" }
        if (videoExtensions.includes(this.Extention)) { return "video" }
        return "other"
    }

    get Hash() {
        return this.Data.Hash
    }

    get Link() {
        return `${Bun.env.HOST}:${Bun.env.PORT}/file/${this.Data.Hash}`
    }

    get RawLink() {
        return `${Bun.env.HOST}:${Bun.env.PORT}/api/v1/file/${this.Data.Hash}`
    }

    get MimeType() {
        return mime.getType(this.Extention)
    }
}

export default File
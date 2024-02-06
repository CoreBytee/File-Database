import { basename } from "path"
import File from "../../../../Classes/File.js"
import CheckAuthentication from "../../../../Helpers/CheckAuthentication"

export default function UploadMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/upload",
        async (Request) => {
            console.log(Request.User)
            const FileData = Request.body.file
            const FileName = basename(Request.body.filename.replaceAll("\\", "/"))
            console.log(File, FileName)

            const Upload = await File.Create(FileData, FileName, Request.User)
        },
        {
            beforeHandle: CheckAuthentication
        }
    )
}
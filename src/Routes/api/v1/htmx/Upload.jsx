import { basename } from "path"
import File from "../../../../Classes/File.js"
import AuthenticateUser from "../../../../Helpers/AuthenticateUser.jsx"
import { t } from "elysia"

export default function UploadMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/upload",
        async (Request) => {
            const FileData = Request.body.file
            const FileName = basename(Request.body.filename.replaceAll("\\", "/"))

            const Upload = await File.Create(FileData, FileName, Request.User)

            return <div class="complete">
                <h1>Upload complete</h1>
                <p>Copy this link to share your file or <a href={Upload.Link} target="_blank">view it yourself</a>.</p>
                <code>{Upload.Link}</code>
                <a href="/upload">Upload another</a>
            </div>
        },
        {
            beforeHandle: AuthenticateUser,
            body: t.Object(
                {
                    file: t.File({ error: "Invalid file uploaded" }),
                    filename: t.String(
                        {
                            maxLength: 255,
                            error: "Invalid filename entered"
                        }
                    )
                }
            )
        }
    )
}
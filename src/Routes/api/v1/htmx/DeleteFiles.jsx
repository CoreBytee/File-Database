import AuthenticateUser from "../../../../Helpers/AuthenticateUser"
import File from "../../../../Classes/File"

export default function DeleteFilesMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/deletefiles",
        async (Request) => {
            const FileIds = Object.keys(Request.body).map((Id) => { return parseInt(Id) }).filter((Id) => { return !isNaN(Id) })
            const Files = await File.FromMultipleIds(FileIds)

            for (const File of Files) {
                if (!File) { continue }
                await File.Delete()
            }

            Request.set.headers = {
                "Hx-Refresh": "true"
            }

            return "Success"
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
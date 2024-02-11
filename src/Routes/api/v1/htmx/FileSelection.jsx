import AuthenticateUser from "../../../../Helpers/AuthenticateUser"
import File from "../../../../Classes/File"
import FileSelection from "../../../../Components/FileSelection"

export default function FileSelectionMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/fileselection",
        async (Request) => {
            const FileIds = Object.keys(Request.body).map((Id) => { return parseInt(Id) }).filter((Id) => { return !isNaN(Id) })
            const Files = await File.FromMultipleIds(FileIds)

            return <FileSelection Files={Files} />
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
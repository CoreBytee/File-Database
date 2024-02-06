import { t } from "elysia"
import FilePage from "../../Layouts/FilePage"
import File from "../../Classes/File"

export default function Index(FileDB, App) {
    App.get(
        "/file/:hash",
        async (Request) => {
            const FileInstance = await File.FromHash(Request.params.hash)
            if (!FileInstance) {
                return "File not found"
            }
            return <FilePage file={FileInstance} uploader={await FileInstance.GetUser()} />
        },
        {
            params: t.Object(
                {
                    hash: t.String()
                }
            )
        }
    )
}
import { t } from "elysia"
import FilePage from "../../Layouts/FilePage"
import File from "../../Classes/File"

export default function Index(FileDB, App) {
    App.get(
        "/file/:hash",
        async (Request) => {
            const FileInstance = await File.FromHash(Request.params.hash)
            Request.set.headers = {
                
            }
            return <FilePage file={FileInstance} />
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
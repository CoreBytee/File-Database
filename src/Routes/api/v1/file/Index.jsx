import { t } from "elysia"
import File from "../../../../Classes/File"

export default function GalleryMethod(FileDB, App) {
    App.get(
        "/api/v1/file/:hash",
        async (Request) => {
            const FileInstance = await File.FromHash(Request.params.hash)
            if (!FileInstance) {
                Request.set.status = 404
                return "File not found"
            }
            Request.set.status = 200
            Request.set.headers = {
                "Content-Type": FileInstance.MimeType,
                "Content-Disposition": `attachment; filename="${FileInstance.Name}"`
            }
            return Bun.file(await FileInstance.GetFilePath())
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
import CheckAuthentication from "../../Helpers/CheckAuthentication"
import GalleryPage from "../../Layouts/GalleryPage"

export default function Index(FileDB, App) {
    App.get(
        "/gallery",
        async (Request) => {
            return <GalleryPage />
        },
        {
            beforeHandle: CheckAuthentication
        }
    )
}
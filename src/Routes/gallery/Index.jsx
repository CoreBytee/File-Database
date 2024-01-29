import CheckAuthentication from "../../Helpers/CheckAuthentication"
import GalleryPage from "../../Layouts/Gallery"

export default function Index(FileDB, App) {
    App.get(
        "/gallery",
        async (Request) => {
            const Authentication = await CheckAuthentication(Request)
            if (!Authentication) { return }
            return <GalleryPage />
        }
    )
}
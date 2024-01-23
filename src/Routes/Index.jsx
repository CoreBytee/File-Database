import CheckAuthentication from "../Helpers/CheckAuthentication"
import LoginPage from "../Layouts/LoginPage"
import GalleryPage from "../Layouts/GalleryPage"

export default function Index(FileDB, App) {
    App.get(
        "/",
        async (Request) => {
            const Authentication = await CheckAuthentication(Request)
            return Authentication ? <GalleryPage /> : <LoginPage />
        }
    )
}
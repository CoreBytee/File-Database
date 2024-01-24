import CheckAuthentication from "../Helpers/CheckAuthentication"
import LoginPage from "../Layouts/LoginPage"
import GalleryPage from "../Layouts/MainPage"

export default function Index(FileDB, App) {
    App.get(
        "/",
        async (Request) => {
            const Authentication = await CheckAuthentication(Request)
            return Authentication ? <GalleryPage /> : <LoginPage />
        }
    )
}
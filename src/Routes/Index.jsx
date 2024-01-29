import CheckAuthentication from "../Helpers/CheckAuthentication"
import LoginPage from "../Layouts/LoginPage"

export default function Index(FileDB, App) {
    App.get(
        "/",
        async (Request) => {
            const Authentication = await CheckAuthentication(Request)
            if (!Authentication) { return }
            Request.set.status = 302
            Request.set.headers.location = "/gallery"
        }
    )
}
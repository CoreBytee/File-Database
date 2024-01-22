import { LoginPage } from "../Layouts/LoginPage"

export default function Index(FileDB, App) {
    App.get(
        "/",
        () => {
            return <LoginPage />
        }
    )
}
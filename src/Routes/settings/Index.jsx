import AuthenticateUser from "../../Helpers/AuthenticateUser"
import SettingsPage from "../../Layouts/SettingsPage"

export default function Index(FileDB, App) {
    App.get(
        "/settings",
        async (Request) => {
            return <SettingsPage user={Request.User} />
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
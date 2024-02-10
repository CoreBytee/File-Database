import AuthenticateUser from "../../../../Helpers/AuthenticateUser"
import Randomstring from "randomstring"

export default function RegenerateKeyMethod(FileDB, App) {
    App.get(
        "/api/v1/htmx/regeneratekey",
        async (Request) => {
            const NewKey = await Request.User.ResetAPIKey()
            return <code>{NewKey}</code>
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
import CheckAuthentication from "../../../../Helpers/CheckAuthentication"
import Randomstring from "randomstring"

export default function RegenerateKeyMethod(FileDB, App) {
    App.get(
        "/api/v1/htmx/regeneratekey",
        async (Request) => {
            const NewKey = Randomstring.generate(64)
            await Request.User.SetAPIKey(NewKey)
            return <code>{NewKey}</code>
        },
        {
            beforeHandle: CheckAuthentication
        }
    )
}
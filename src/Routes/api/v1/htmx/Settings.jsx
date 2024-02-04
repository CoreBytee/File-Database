import CheckAuthentication from "../../../../Helpers/CheckAuthentication"

export default function SettingsMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/settings",
        async (Request) => {
            console.log(Request.body)
            const User = Request.User
            if (Request.body.username === "" && Request.body.email === "" && Request.body.password === "") { return "No changes found" }
            if (Request.body.username.length > 30 || Request.body.email.length > 50 || Request.body.password.length > 512) { return "Invalid input" }

            console.log(User)

            if (Request.body.username !== "") {
                await User.SetUsername(Request.body.username)
            }

            if (Request.body.email !== "") {
                await User.SetEmail(Request.body.email)
            }

            if (Request.body.password !== "") {
                await User.SetPassword(Request.body.password)
            }

            Request.set.headers = {
                "Hx-Refresh": "true"
            }

            return "ok"
        },
        {
            beforeHandle: CheckAuthentication
        }
    )
}
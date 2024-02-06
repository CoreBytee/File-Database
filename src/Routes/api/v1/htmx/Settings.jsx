import { t } from "elysia"
import CheckAuthentication from "../../../../Helpers/CheckAuthentication"

export default function SettingsMethod(FileDB, App) {
    App.post(
        "/api/v1/htmx/settings",
        async (Request) => {
            const User = Request.User
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
            beforeHandle: CheckAuthentication,
            body: t.Object(
                {
                    username: t.String(
                        {
                            maxLength: 30,
                            error: "Invalid username entered"
                        }
                    ),
                    email: t.String(
                        {
                            format: "email",
                            error: "Invalid email entered",
                            maxLength: 50
                        }
                    ),
                    password: t.String(
                        {
                            maxLength: 512,
                            error: "Invalid password entered"
                        }
                    )
                }
            )
        }
    )
}
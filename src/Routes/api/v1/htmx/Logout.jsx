export default function Login(FileDB, App) {
    App.post(
        "/api/v1/htmx/logout",
        async (Request) => {
            Request.cookie.authentication.set(
                {
                    value: "",
                    httpOnly: true,
                    path: "/",
                }
            )
            Request.set.headers = {
                "Hx-Refresh": "true"
            }
            return "Success"
        }
    )
}
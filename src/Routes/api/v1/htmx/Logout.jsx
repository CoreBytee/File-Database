export default function LogoutMethod(FileDB, App) {
    App.get(
        "/api/v1/htmx/logout",
        async (Request) => {
            Request.cookie.authentication.set(
                {
                    value: "",
                    httpOnly: true,
                    path: "/",
                }
            )
            Request.set.status = 302
            Request.set.headers = { location: "/" }
            return "Success"
        }
    )
}
export default function Login(FileDB, App) {
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
            console.log("Logout")
            Request.set.status = 302
            Request.set.headers = { location: "/" }
            return "Success"
        }
    )
}
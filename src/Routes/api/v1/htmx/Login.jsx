export default function Login(FileDB, App) {
    const UnknownUserMessage = "Unknown User or Password"
    App.post(
        "/api/v1/htmx/login",
        async (Request) => {
            const Username = Request.body.username
            const Password = Request.body.password

            const User = await FileDB.Database.GetUserFromUsername(Username)
            if (!User) return UnknownUserMessage
            if (!await User.CheckPassword(Password)) return UnknownUserMessage

            const Token = await Request.JWT.sign(
                {
                    Username,
                }
            )

            Request.cookie.authentication.set(
                {
                    value: Token
                }
            )

            Request.set.headers = {
                "Hx-Refresh": "true"
            }

            return "Success"
        }
    )
}
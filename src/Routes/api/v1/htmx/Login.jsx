import User from "../../../../Classes/User"

export default function Login(FileDB, App) {
    const UnknownUserMessage = "Unknown User or Password"
    App.post(
        "/api/v1/htmx/login",
        async (Request) => {
            const Username = Request.body.username
            const Password = Request.body.password

            const FoundUser = await User.FromUsername(Username)
            if (!FoundUser) return UnknownUserMessage
            if (!await FoundUser.CheckPassword(Password)) return UnknownUserMessage

            const Token = await Request.JWT.sign(
                {
                    UserId: FoundUser.Id,
                    Username,
                }
            )

            Request.cookie.authentication.set(
                {
                    value: Token,
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7,
                    path: "/"
                }
            )

            Request.set.headers = {
                "Hx-Refresh": "true"
            }

            return "Success"
        }
    )
}
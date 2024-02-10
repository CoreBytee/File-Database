import User from "../Classes/User"
import LoginPage from "../Layouts/LoginPage"

function ErrorResponse(Request) {
    Request.set.status = 401
    Request.set.headers["Content-Type"] = "text/html"
    return <LoginPage />
}

export default async function AuthenticateUser(Request) {
    const AuthenticationCookie = Request.cookie.authentication.value
    const TokenData = await Request.JWT.verify(AuthenticationCookie)
    if (!TokenData) { return ErrorResponse(Request) }
    Request.User = await User.FromId(TokenData.UserId)
    if (!Request.User) { return ErrorResponse(Request) }
}
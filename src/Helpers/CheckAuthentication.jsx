import User from "../Classes/User"
import LoginPage from "../Layouts/LoginPage"

export default async function CheckAuthentication(Request) {
    const AuthenticationCookie = Request.cookie.authentication.value
    const TokenData = await Request.JWT.verify(AuthenticationCookie)
    if (!TokenData) {
        console.log( "No Token Data" )
        Request.set.status = 401
        Request.set.headers["Content-Type"] = "text/html"
        return <LoginPage />
    } else {
        Request.User = await User.FromUsername(TokenData.Username)
    }
}
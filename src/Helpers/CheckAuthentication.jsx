import LoginPage from "../Layouts/LoginPage"

export default async function CheckAuthentication(Request) {
    const AuthenticationCookie = Request.cookie.authentication.value
    console.log(AuthenticationCookie)
    const TokenData = await Request.JWT.verify(AuthenticationCookie)
    console.log
    if (!TokenData) {
        return false
    }
    return TokenData
}
import LoginPage from "../Layouts/LoginPage"

export default async function CheckAuthentication(Request) {
    const TokenData = await Request.JWT.verify(Request.cookie.authentication.value)
    if (!TokenData) {
        Request.set.body = <LoginPage />
        return false
    }
    return TokenData
}
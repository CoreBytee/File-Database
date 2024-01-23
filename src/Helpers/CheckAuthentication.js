export default async function CheckAuthentication(Request) {
    const TokenData = await Request.JWT.verify(Request.cookie.authentication.value)
    if (!TokenData) return false
    return await Request.JWT.verify(Request.cookie.authentication.value)
}
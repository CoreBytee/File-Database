export default async function CheckAuthentication(Request) {
    return await Request.JWT.verify(Request.cookie.authentication)
}
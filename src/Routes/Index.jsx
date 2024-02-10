import AuthenticateUser from "../Helpers/AuthenticateUser"

export default function Index(FileDB, App) {
    App.get(
        "/",
        async (Request) => {
            Request.set.status = 302
            Request.set.headers.location = "/gallery"
            return "Success"
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
import CheckAuthentication from "../Helpers/CheckAuthentication"

export default function Index(FileDB, App) {
    App.get(
        "/",
        async (Request) => {
            Request.set.status = 302
            Request.set.headers.location = "/gallery"
            return "Success"
        },
        {
            beforeHandle: CheckAuthentication
        }
    )
}
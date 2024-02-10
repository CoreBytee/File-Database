import AuthenticateUser from "../../Helpers/AuthenticateUser"
import UploadPage from "../../Layouts/UploadPage"

export default function Index(FileDB, App) {
    App.get(
        "/upload",
        async (Request) => {
            return <UploadPage />
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
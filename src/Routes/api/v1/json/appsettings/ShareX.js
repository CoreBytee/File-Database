import AuthenticateUser from "../../../../../Helpers/AuthenticateUser"

export default function Index(FileDB, App) {
    App.get(
        "/api/v1/json/appsettings/sharex",
        async (Request) => {
            return {
                Version: "14.0.0",
                Name: "FileDB",
                DestinationType: "ImageUploader, TextUploader, FileUploader, URLShortener",
                RequestMethod: "POST",
                RequestURL: `${Bun.env.REQUEST_ORIGIN}/api/v1/json/upload`,
                Body: "MultipartFormData",
                FileFormName: "file",

                URL: "{json:URL}",
                DeletionURL: "{json:DeletionURL}",
                ErrorMessage: "{json:ErrorMessage}",

                Headers: {
                    Authorization: Request.User.APIKey
                }
            }
        },
        {
            beforeHandle: AuthenticateUser
        }
    )
}
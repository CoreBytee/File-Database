import ModeSwitch from "../../../../Components/ModeSwitch"

export default function Login(FileDB, App) {
    App.post(
        "/api/v1/htmx/usermodeswitch",
        async (Request) => {
            console.log(Request.body)
            return <ModeSwitch state={Request.body.usermodeswitch=="1"} />
        }
    )
}
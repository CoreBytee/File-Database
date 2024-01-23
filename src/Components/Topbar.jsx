import ModeSwitch from "./ModeSwitch.jsx"

export default function Topbar( { username } ) {
    console.log(username)
    return (
        <div class="Topbar">
            <ModeSwitch />
            <p class="header">FILEDB</p>
            <p hx-post="/api/v1/htmx/logout" class="logoutbutton">logout from {username}</p>
        </div>
    )
}
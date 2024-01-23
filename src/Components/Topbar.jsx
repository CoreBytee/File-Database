import ModeSwitch from "./ModeSwitch.jsx"

export default function Topbar() {
    return (
        <div class="Topbar">
            <ModeSwitch />
            <a class="header">FILEDB</a>
            <p hx-post="/api/v1/htmx/logout" class="logoutbutton">logout</p>
        </div>
    )
}
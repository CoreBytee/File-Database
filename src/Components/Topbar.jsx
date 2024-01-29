export default function Topbar() {
    return (
        <div class="Topbar">
            <a class="header">FILEDB</a>
            <a href="/gallery">Gallery</a>
            <a href="/upload">Upload</a>
            <a href="/settings">Settings</a>
            <a href="/api/v1/htmx/logout" class="logoutbutton">logout</a>
        </div>
    )
}
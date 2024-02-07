export default function Topbar() {
    return (
        <header class="Topbar">
            <div class="topbarcontent">
                <p class="header">FILEDB</p>
                <a href="/gallery">Gallery</a>
                <a href="/upload">Upload</a>
                <a href="/settings">Settings</a>
                <a href="/api/v1/htmx/logout" class="logoutbutton">Logout</a>
            </div>
        </header>
    )
}
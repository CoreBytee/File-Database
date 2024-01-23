export default function Topbar() {
    return (
        <div class="Login">
            <a class="header">FILEDB</a>
            <form hx-post="/api/v1/htmx/login" hx-target=".error" hx-swap="innerHTML">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" />
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
            <a class="error"></a>
        </div>
    )
}
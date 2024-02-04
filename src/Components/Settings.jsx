export default function Settings({ user }) {
    return (
        <div class="Settings maincontent">
            <form class="floatingblock" hx-post="/api/v1/htmx/settings" hx-swap="innerTEXT" hx-target=".error">
                <h1>Settings</h1>
                
                <label htmlFor="usernamefield">Change username: </label><br />
                <input type="text" name="username" id="usernamefield" placeholder={user.Username} maxLength={30} /><br /><br />

                <label htmlFor="emailfield">Change email: </label><br />
                <input type="text" name="email" id="emailfield" placeholder={user.Email} maxLength={50} /><br /><br />

                <label htmlFor="passwordfield">Change password: </label><br />
                <input type="password" name="password" id="passwordfield" maxLength={512} /><br /><br />

                <input type="submit" value="Save changes" /><br />
                <p class="error"></p>
            </form>

            <div class="floatingblock">
                <h1>API-Token</h1>
                <p>For security reasons you can only view your API key after you regenerate it.</p><br />
                <input type="submit" value="Regenerate API key" hx-get="/api/v1/htmx/regeneratekey" hx-swap="outerHTML" />
            </div>
        </div>
    )
}
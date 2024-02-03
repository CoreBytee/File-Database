export default function Settings({ user }) {
    return (
        <div class="Settings maincontent">
            <form class="floatingblock">
                <label htmlFor="usernamefield">Change username: </label><br />
                <input type="text" name="username" id="usernamefield" value={user.Username}/><br /><br />

                <label htmlFor="emailfield">Change email: </label><br />
                <input type="text" name="email" id="emailfield" value={user.Email} /><br /><br />

                <label htmlFor="passwordfield">Change password: </label><br />
                <input type="password" name="password" id="passwordfield" />
            </form>
        </div>
    )
}
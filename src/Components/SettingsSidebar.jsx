export default function SettingsSidebar({ user }) {
    console.log(user)
    return (
        <div class="SettingsSidebar sidebar">
            <div class="userinfo floatingblock">
                <img src={user.Gravatar} alt="" />
                <h1>{user.Username}</h1>
            </div>

            <div class="downloads floatingblock">
                <h1>Downloads</h1>
                <p>Here you can download configuration files for your capturing applications.</p>
            </div>

        </div>
    )
}
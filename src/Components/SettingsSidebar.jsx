export default function SettingsSidebar({ user }) {
    console.log(user)
    return (
        <div class="SettingsSidebar sidebar">
            <div class="userinfo floatingblock">
                <img src={user.Gravatar} alt="" />
                <p class="header">{user.Username}</p>
            </div>

            <div class="downloads floatingblock">
                <p class="header">Downloads</p>
                <p>Here you can download configuration files for your capturing applications.</p>
            </div>

        </div>
    )
}
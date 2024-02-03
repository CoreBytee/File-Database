import Root from "../Components/Root"
import Topbar from "../Components/Topbar"
import MainView from "../Components/MainView"
import SettingsSidebar from "../Components/SettingsSidebar"
import Settings from "../Components/Settings"

export default function SettingsPage({ children, user }) {
    return (
        <Root>
            <Topbar />
            <MainView>
                <Settings />
                <SettingsSidebar user={user} />
            </MainView>
        </Root>
    )
}
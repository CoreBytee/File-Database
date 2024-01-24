import Root from "../Components/Root"
import Center from "../Components/Center"
import Topbar from "../Components/Topbar"
import MainView from "../Components/MainView"

export default function GalleryPage({ children }) {
    return (
        <Root>
            <Topbar />
            <MainView />
        </Root>
    )
}
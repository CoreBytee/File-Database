import Root from "../Components/Root"
import Topbar from "../Components/Topbar"
import MainView from "../Components/MainView"
import GallerySidebar from "../Components/GallerySidebar"
import Gallery from "../Components/Gallery"

export default function GalleryPage({ children }) {
    return (
        <Root>
            <Topbar />
            <MainView>
                <Gallery />
                <GallerySidebar />
            </MainView>
        </Root>
    )
}
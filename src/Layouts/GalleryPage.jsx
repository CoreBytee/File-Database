import Root from "../Components/Root"
import Center from "../Components/Center"
import Topbar from "../Components/Topbar"

export default function GalleryPage({ children, username }) {
    return (
        <Root>
            <Topbar username={username} />
            <Center viewport>
                
            </Center>
        </Root>
    )
}
import Root from "../Components/Root"
import Topbar from "../Components/Topbar"
import Center from "../Components/Center"
import Upload from "../Components/Upload"

export default function UploadPage({ children }) {
    return (
        <Root>
            <Topbar />
            <Center viewport topbar>
                <Upload />
            </Center>
        </Root>
    )
}
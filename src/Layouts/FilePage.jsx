import Root from "../Components/Root"
import Center from "../Components/Center"
import FileDisplay from "../Components/FileDisplay"

export default function FilePage({ children, file, uploader }) {
    return (
        <Root>
            <Center viewport>
                <FileDisplay file={file} uploader={uploader} />
            </Center>
        </Root>
    )
}
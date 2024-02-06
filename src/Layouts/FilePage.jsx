import Root from "../Components/Root"
import Center from "../Components/Center"

export default function FilePage({ children, file }) {
    console.log(file.DisplayType)
    const DisplayType = file.DisplayType
    let Display
    if (DisplayType == "image") {
        Display = <img class="floatingblock" src={`/api/v1/file/${file.Hash}`} alt={file.Hash} />
    } else if (DisplayType == "video") {
        Display = <video class="floatingblock" src={`/api/v1/file/${file.Hash}`} />
    } else if (DisplayType == "text") {
        Display = <code hx-get={`/api/v1/file/${file.Hash}`}d hx-swap="innerHTML"></code>
    }
    return (
        <Root>
            <Center viewport>
                {Display}
            </Center>
        </Root>
    )
}
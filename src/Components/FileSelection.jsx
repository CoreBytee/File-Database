import ReadableSize from "../Helpers/ReadableSize";

export default function FileSelection({ Files = [] }) {
    let RenderedFile
    let ViewLink
    let CopyLinkButton
    let DeleteButton

    if (Files.length == 1) {
        RenderedFile = Files[0].Render()
        ViewLink = <><a class={"button"} href={Files[0].Link} target="_blank">View</a><a class={"button"} href={Files[0].RawLink}>Download</a></>
        CopyLinkButton = <button onClick={"navigator.clipboard.writeText(this.getAttribute('link'))"} link={Files[0].Link}>Copy Link</button>
    }

    if (Files.length > 0) {
        DeleteButton = <button hx-confirm={`Are you sure? This will delete ${Files.length} file${Files.length != 1 ? "s" : ""}!`} hx-include="#fileselect" hx-post="/api/v1/htmx/deletefiles">Delete selected files</button>
    }

    return (
        <div class="FileSelection floatingblock">
            <h1>Selected {Files.length} file{Files.length != 1 ? "s" : ""}</h1>
            {RenderedFile}
            <p>Total size: {ReadableSize(Files.map(File => File.Size).reduce((Total, Size) => Total + Size, 0))}</p>
            {ViewLink}
            {CopyLinkButton}
            {DeleteButton}
        </div>
    )
}
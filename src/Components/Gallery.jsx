import GalleryItem from "./GalleryItem";

export default function Gallery({ Files = [], DisplayType = "LargeGrid" }) {
    let Header
    if (DisplayType == "Rows") {
        Header = (
            <div class="header">
                <i class="bi bi-check2"></i>
                <i class="bi bi-file-earmark"></i>
                <p>Name</p>
                <p>Size</p>
                <p>Upload date</p>
            </div>
        )
    }
    return (
        <div class="Gallery maincontent">
            <div class={DisplayType.toLowerCase()}>
                {Header}
                {Files.map(File => <GalleryItem File={File} DisplayType={DisplayType} />)}
            </div>
        </div>
    )
}
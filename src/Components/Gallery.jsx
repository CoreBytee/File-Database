import GalleryItem from "./GalleryItem";

export default function Gallery({ Files = [], DisplayType = "LargeGrid" }) {
    return (
        <div class="Gallery maincontent">
            <div class={DisplayType.toLowerCase()}>
                {Files.map(File => <GalleryItem File={File} DisplayType={DisplayType} />)}
            </div>
        </div>
    )
}
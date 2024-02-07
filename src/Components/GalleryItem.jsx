export default function GalleryItem({ File, DisplayType }) {
    console.log(DisplayType)
    return (
        <div class={`GalleryItem floatingblock ${DisplayType.toLowerCase()}`}>
            <div class="contentcontainer">
                {File.Render()}
            </div>
            <div class="data">
                <p>{File.Name}</p>
                <p>{File.ReadableSize} {File.ShortUploadDate}</p>
            </div>
        </div>
    )
}
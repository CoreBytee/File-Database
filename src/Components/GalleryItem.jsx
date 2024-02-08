export default function GalleryItem({ File, DisplayType }) {
    return (
        <div class={`GalleryItem floatingblock ${DisplayType.toLowerCase()}`}>
            <input type="checkbox" name="" id="" />
            <div class="contentcontainer">
                {File.Render()}
                <i class={`bi ${File.BootstrapIcon}`}></i>
            </div>
            <div class="data">
                <p title={File.Name}>{File.Name}</p>
                <p>{File.ReadableSize} {File.ShortUploadDate}</p>
            </div>
        </div>
    )
}
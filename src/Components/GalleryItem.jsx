export default function GalleryItem({ File, DisplayType }) {
    return (
        <div class={`GalleryItem floatingblock ${DisplayType.toLowerCase()}`}>
            <input type="checkbox" name={File.Id} id="fileselect" hx-post="/api/v1/htmx/fileselection" hx-trigger="change" hx-include="#fileselect" />
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
export default function GalleryItem({ File, DisplayType }) {
    if (DisplayType == "Rows") {
        return (
            <div class={`GalleryItem ${DisplayType.toLowerCase()}`}>
                <input type="checkbox" name={File.Id} id="fileselect" hx-post="/api/v1/htmx/fileselection" hx-trigger="change" hx-include="#fileselect" hx-target=".FileSelection" hx-swap="outerHTML" />
                <i class={`bi ${File.BootstrapIcon}`}></i>
                <p>{File.Name}</p>
                <p>{File.ReadableSize}</p>
                <p>{File.ShortUploadDate}</p>
            </div>
        )
    } else {
        const RenderIcon = File.DisplayType == "image" || File.DisplayType == "video"

        return (
            <div class={`GalleryItem floatingblock ${DisplayType.toLowerCase()} ${RenderIcon ? "" : "rendericon"}`}>
                <input type="checkbox" name={File.Id} id="fileselect" hx-post="/api/v1/htmx/fileselection" hx-trigger="change" hx-include="#fileselect" hx-target=".FileSelection" hx-swap="outerHTML" />
                <div class="contentcontainer">
                    {RenderIcon ? File.Render() : ""}
                    <i class={`bi ${File.BootstrapIcon}`}></i>
                </div>
                <div class="data">
                    <p title={File.Name}>{File.Name}</p>
                    <p>{File.ReadableSize} {File.ShortUploadDate}</p>
                </div>
            </div>
        )
    }
}
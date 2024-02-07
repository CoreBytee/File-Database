export default function GalleryDisplayForm() {
    return (
        <div class="GalleryDisplayForm floatingblock">
            <form hx-get="/api/v1/htmx/gallery" hx-swap="outerHTML" hx-target=".Gallery" hx-trigger="load, change">
                <label for="displaytypeselect">Display as:</label><br />
                <select name="displaytype" id="displaytypeselect">
                    <option value="LargeGrid">Large Grid</option>
                    <option value="SmallGrid">Small Grid</option>
                    <option value="Rows">Rows</option>
                </select><br />

                <label for="sortorderselect">Sort by:</label><br />
                <select name="sortorder" id="sortorderselect">
                    <option value="FileName">File name</option>
                    <option value="Size">File size</option>
                    <option value="UploadDate">Upload date</option>
                </select>
                <input type="checkbox" name="reversed" id="reversedcheckbox" />
            </form>
        </div>
    )
}
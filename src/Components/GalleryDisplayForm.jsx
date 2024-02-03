export default function GalleryDisplayForm() {
    return (
        <div class="GalleryDisplayForm floatingblock">
            <form hx-get="/api/v1/htmx/gallery" hx-swap="outerHTML" hx-target=".Gallery" hx-trigger="load, change">
                <p>Display as:</p>
                <select name="displaytype" id="">
                    <option value="largegrid">Large Grid</option>
                    <option value="smallgrid">Small Grid</option>
                    <option value="rows">Rows</option>
                </select>

                <p>Sort by:</p>
                <select name="sortorder" id="">
                    <option value="uploaddate">Upload date</option>
                </select>
            </form>
        </div>
    )
}
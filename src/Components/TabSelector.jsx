export default function TabSelector() {
    return (
        <div class="TabSelector">
            <p>Current View:</p>
            <select name="pagename" id="" hx-post="/api/v1/htmx/content" hx-target=".content">
                <option value="gallery">Gallery</option>
                <option value="settings">Settings</option>
            </select>
        </div>
    )
}
export default function TabSelector() {
    return (
        <div class="TabSelector">
            <p>Current View:</p>
            <select name="pagename" id="" hx-post="/api/v1/htmx/content" hx-target=".content" hx-include="[name='usermodeswitch']">
                <option value="gallery">Gallery</option>
                <option value="settings">Settings</option>
            </select>
        </div>
    )
}
import TabSelector from "./TabSelector";

export default function MainView() {
    return (
        <div class="MainView">
            <div class="content">
                <div hx-post="/api/v1/htmx/content" hx-trigger="load" hx-swap="outerHTML"></div>
            </div>
            <div class="sidebar">
                <TabSelector />
            </div>

        </div>
    )
}
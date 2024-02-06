export default function Center({ children, viewport, topbar }) {
    return (
        <div class={`Center ${viewport ? "Viewport" : ""} ${topbar ? "topbar" : ""}`}>
            {children}
        </div>
    )
}
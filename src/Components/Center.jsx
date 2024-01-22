export const Center = ({ children, viewport }) => {
    return (
        <div class={`Center ${viewport ? "Viewport" : ""}`}>
            {children}
        </div>
    )
}
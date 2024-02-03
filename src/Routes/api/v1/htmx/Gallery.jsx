import Gallery from "../../../../Components/Gallery"

export default function Gallery(FileDB, App) {
    App.get(
        "/api/v1/htmx/gallery",
        async (Request) => {
            return <Gallery />
        }
    )
}
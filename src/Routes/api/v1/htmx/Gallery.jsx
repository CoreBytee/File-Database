import Gallery from "../../../../Components/Gallery"

export default function GalleryMethod(FileDB, App) {
    App.get(
        "/api/v1/htmx/gallery",
        async (Request) => {
            return <Gallery />
        }
    )
}
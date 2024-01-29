import GalleryItem from "../../../../Components/GalleryTile"

export default function Login(FileDB, App) {
    console.log("hi")
    App.post(
        "/api/v1/htmx/content",
        async (Request) => {
            const PageName = Request.body.pagename || "gallery"
            if (PageName == "gallery") {
                return <GalleryItem />
            } else if (PageName == "settings") {
                    
            }
            return "PLS explain how..."
        }
    )
}
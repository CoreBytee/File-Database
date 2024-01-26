import GalleryItem from "../../../../Components/GalleryItem"

export default function Login(FileDB, App) {
    console.log("hi")
    App.post(
        "/api/v1/htmx/content",
        async (Request) => {
            const PageName = Request.body.pagename || "gallery"
            if (PageName == "gallery") {
                <GalleryItem />
            } else if (PageName == "settings") {
                    
            }
            return "PLS explain how..."
        }
    )
}
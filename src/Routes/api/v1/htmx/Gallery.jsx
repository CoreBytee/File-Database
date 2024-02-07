import { t } from "elysia"
import Gallery from "../../../../Components/Gallery"
import CheckAuthentication from "../../../../Helpers/CheckAuthentication"
import File from "../../../../Classes/File"

const PossibleDisplayTypes = ["LargeGrid", "SmallGrid", "Rows"]
const PossibleSortOrders = ["FileName", "Size", "UploadDate"]

export default function GalleryMethod(FileDB, App) {
    App.get(
        "/api/v1/htmx/gallery",
        async (Request) => {
            const DisplayType = Request.query.displaytype
            const SortOrder = Request.query.sortorder
            const Reversed = Request.query.reversed === "on"
            if (!PossibleDisplayTypes.includes(DisplayType)) { return "Invalid display type" }
            if (!PossibleSortOrders.includes(SortOrder)) { return "Invalid sort order" }
            const Files = await File.List(10, 0, SortOrder, Reversed)
            // console.log(Files)
            return <Gallery Files={Files} DisplayType={DisplayType} />
        },
        {
            beforeHandle: CheckAuthentication,
            query: t.Object(
                {
                    displaytype: t.String(),
                    sortorder: t.String(),
                    reversed: t.Optional(
                        t.String()
                    )
                }
            )
        }
    )
}
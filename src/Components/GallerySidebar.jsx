import FileSelection from "./FileSelection";
import GalleryDisplayForm from "./GalleryDisplayForm";

export default function GallerySidebar() {
    return (
        <div class="GallerySidebar sidebar">
            <GalleryDisplayForm />
            <FileSelection />
        </div>
    )
}
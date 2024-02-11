export default function RenderFile(File) {
    const DisplayType = File.DisplayType
    if (DisplayType == "image") {
        return <img src={File.RawLink} alt={File.Hash} />
    } else if (DisplayType == "video") {
        return <video controls><source src={File.RawLink} type="video/mp4" /></video>
    } else if (DisplayType == "text") {
        return <code hx-get={File.RawLink} hx-swap="innerHTML"></code>
    } else if (DisplayType == "audio") {
        return <audio controls><source src={File.RawLink} /></audio>
    }
}
export default function FileDisplay({ file, uploader }) {
    const File = file
    const User = uploader

    const DisplayType = file.DisplayType
    let Display
    if (DisplayType == "image") {
        Display = <img src={File.RawLink} alt={File.Hash} />
    } else if (DisplayType == "video") {
        Display = <video controls><source src={File.RawLink} type="video/mp4" /></video>
    } else if (DisplayType == "text") {
        Display = <code hx-get={RawLink} hx-swap="innerHTML"></code>
    }

    return (
        <div class="FileDisplay floatingblock">
            <div class="data">
                <img src="/assets/image/icon.svg" alt="filedb-logo" />
                <div class="file">
                    <p>Name: {File.Name} {File.ReadableSize}</p>
                    <p>Uploaded at: {File.ShortUploadDate} <a href={File.RawLink} target="_blank">View raw</a></p>
                </div>
                <div class="uploader">
                    <p>Uploader:</p>
                    <p>{User.Username}</p>
                </div>
                <img src={User.Gravatar} alt="usericon" />
            </div>
            {Display}
        </div>
    )
}
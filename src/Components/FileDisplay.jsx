export default function FileDisplay({ file, uploader }) {
    const File = file
    const User = uploader
    
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
            {File.Render()}
        </div>
    )
}
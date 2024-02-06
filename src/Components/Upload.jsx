export default function Upload() {
    return (
        <div class="Upload floatingblock">
            <form hx-encoding='multipart/form-data' hx-post="/api/v1/htmx/upload" hx-trigger="change">
                <input type="file" name="file" id="" onchange="document.querySelector('#filename').value = this.value; console.log(this.value)" />
                <input type="text" name="filename" id="filename" hidden />
                <i class="bi bi-box-arrow-in-down"></i>
                <p>Drag and drop your files into this box to upload.</p>
                <progress value="0" max="100"></progress>
            </form>

            <script src="/assets/script/uploadprogress.js"></script>
        </div>
    )
}
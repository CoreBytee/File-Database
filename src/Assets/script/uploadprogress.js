function BytesToReadable(size) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size > 1024) {
        size = size / 1024;
        i++;
    }
    return size.toFixed(2) + ' ' + units[i];
}

let startTime = Date.now();
let prevLoaded = 0;

htmx.on('form', 'htmx:xhr:progress', function(E) {
    const loaded = E.detail.loaded;
    const total = E.detail.total;
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    const dataPerSecond = (loaded - prevLoaded) / elapsedTime;

    document.querySelector("form p").innerText = `Uploading ${BytesToReadable(loaded)} of ${BytesToReadable(total)} (${BytesToReadable(dataPerSecond)}/s)`;
    htmx.find('progress').setAttribute('value', loaded / total * 100);

    prevLoaded = loaded;
});
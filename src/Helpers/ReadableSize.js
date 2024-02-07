export default function ReadableSize(Size) {
    const Units = ["B", "KB", "MB", "GB", "TB"]
    let Unit = 0
    while (Size > 1024) {
        Size /= 1024
        Unit++
    }
    return `${Size.toFixed(2)} ${Units[Unit]}`
}
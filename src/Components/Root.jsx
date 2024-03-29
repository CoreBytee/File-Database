import Copyright from "./Copyright"

export default function Root({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>FileDB</title>

                {/* Imports */}
                <link rel="stylesheet" href="/assets/style/index.css" />
                <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />

                {/* Icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

                {/* Meta */}
                <link rel="manifest" href="/assets/image/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/assets/image/favicon/favicon.ico" type="image/x-icon" />
                <meta name="description" content="FILEDB File Storage" />
            </head>
            <body style="--max-content-width: 1200px">
                {children}
                <Copyright />
            </body>
        </html>
    )
}
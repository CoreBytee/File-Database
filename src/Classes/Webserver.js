import Elysia from "elysia"
import { jwt as JWT } from "@elysiajs/jwt"
import { html as HTML } from "@elysiajs/html"
import { staticPlugin as Static } from "@elysiajs/static"
import { Glob } from "bun"

class Webserver {
    constructor(Port, FileDB) {
        this.Port = Port
        this.FileDB = FileDB
        this.App = new Elysia()

        this.App.onError(
            ({ code, error }) => {
                if (code == "NOT_FOUND") { return "Not found" }
                throw error
            }
        )

        this.App.use(HTML())

        this.App.use(
            JWT(
                {
                    name: "JWT",
                    secret: Bun.env.JWT_SECRET
                }
            )
        )

        this.App.use(
            Static(
                {
                    assets: `${import.meta.dir}/../Assets/`,
                    prefix: "/assets"
                }
            )
        )

    }

    Routes() {
        require("../Routes/api/v1/file/Index").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/Gallery").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/Login").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/Logout").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/RegenerateKey").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/Settings").default(this.FileDB, this.App)
        require("../Routes/api/v1/htmx/Upload").default(this.FileDB, this.App)
        require("../Routes/gallery/Index").default(this.FileDB, this.App)
        require("../Routes/settings/Index").default(this.FileDB, this.App)
        require("../Routes/upload/Index").default(this.FileDB, this.App)
        require("../Routes/Index").default(this.FileDB, this.App)
    }

    Listen() {
        this.App.listen(
            this.Port,
            () => {
                console.log(`Webserver listening on port ${this.Port}`)
            }
        )
    }
}

export default Webserver
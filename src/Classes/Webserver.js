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

        this.App.onError(({ code, error }) => {
            console.log(error.toString())
        })

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
        const Scanner = new Glob("**/*.jsx")
        for (const FilePath of Scanner.scanSync(`${import.meta.dir}/../Routes/`)) {
            require(`../Routes/${FilePath}`).default(this.FileDB, this.App)
        }
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
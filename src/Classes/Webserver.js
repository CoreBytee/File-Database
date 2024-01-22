import Elysia from "elysia"
import { jwt as JWT } from "@elysiajs/jwt"
import { html as HTML } from "@elysiajs/html"
import { staticPlugin as Static } from "@elysiajs/static"

import { Root } from "../Components/Root"
import { LoginPage } from "../Layouts/LoginPage"

class Webserver {
    constructor(Port) {
        this.Port = Port
        this.App = new Elysia()

        this.App.use(
            JWT(
                {
                    name: "JWT",
                    secret: Bun.env.JWT_SECRET
                }
            )
        )
        
        this.App.use(
            HTML()
        )
        
        this.App.use(
            Static(
                {
                    assets: `${import.meta.dir}/../Assets/`,
                    prefix: "/assets"
                }
            )
        )

        this.App.get(
            "/",
            () => {
                return <LoginPage />
            }
        )
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
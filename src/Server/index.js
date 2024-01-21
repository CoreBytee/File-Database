import Elysia from "elysia"
import { jwt as JWT } from "@elysiajs/jwt"
import { html as HTML } from "@elysiajs/html"
import { staticPlugin as Static } from "@elysiajs/static"

const App = new Elysia()

App.use(
    JWT(
        {
            name: "JWT",
            secret: Bun.env.JWT_SECRET
        }
    )
)

App.use(
    HTML()
)

App.use(
    Static(
        {
            assets: `${import.meta.dir}/Assets/`,
            prefix: "/assets"
        }
    )
)

App.get(
    "/",
    require("./Routes/Index").default
)

App.listen(
    Bun.env.WEBSERVER_PORT
)
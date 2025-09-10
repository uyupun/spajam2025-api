import { Hono } from "hono"
import { helloRouter } from "./hello.ts"
import { authHelloRouter } from "./auth-hello.ts"

const apiRouter = new Hono()

apiRouter.route("/hello", helloRouter)
apiRouter.route("/auth-hello", authHelloRouter)

export { apiRouter }

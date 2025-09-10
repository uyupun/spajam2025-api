import { Hono } from "hono"
import { helloRouter } from "./hello.ts"

const apiRouter = new Hono()

apiRouter.route("/hello", helloRouter)

export { apiRouter }

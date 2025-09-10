import { Hono } from "hono"
import { testRouter } from "./test/index.ts"

const apiRouter = new Hono()

apiRouter.route("/test", testRouter)

export { apiRouter }

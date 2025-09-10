import { Hono } from "hono"
import { pingRouter } from "./ping.ts"
import { meRouter } from "./me.ts"
import { greetRouter } from "./greet.ts"

const apiRouter = new Hono()

apiRouter.route("/test/ping", pingRouter)
apiRouter.route("/test/me", meRouter)
apiRouter.route("/test/greet", greetRouter)

export { apiRouter }

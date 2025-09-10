import { Hono } from "hono"
import { pingRouter } from "./ping.ts"
import { meRouter } from "./me.ts"
import { greetRouter } from "./greet.ts"

const testRouter = new Hono()

testRouter.route("/ping", pingRouter)
testRouter.route("/me", meRouter)
testRouter.route("/greet", greetRouter)

export { testRouter }

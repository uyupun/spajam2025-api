import { Hono } from "hono"

const helloRouter = new Hono()

helloRouter.get("/", (c) => {
  const name = c.req.query("name") || "World"
  return c.json({
    message: `Hello, ${name}!`,
  })
})

export { helloRouter }

import { Hono } from "hono"
import { createClient } from "jsr:@supabase/supabase-js@2"
import { authMiddleware } from "../middleware/auth.ts"

interface User {
  id: string
  email: string
}

interface Variables {
  user: User
  supabase: ReturnType<typeof createClient>
}

const authHelloRouter = new Hono<{ Variables: Variables }>()

authHelloRouter.use("/*", authMiddleware)

authHelloRouter.get("/", (c) => {
  const user = c.get("user")
  const name = c.req.query("name") || user?.email || "Authenticated User"

  return c.json({
    message: `Hello, ${name}!`,
    user: {
      id: user?.id,
      email: user?.email,
    },
  })
})

export { authHelloRouter }

import { Hono } from "hono"
import { createClient } from "jsr:@supabase/supabase-js@2"
import { authMiddleware } from "../../middleware/auth.ts"

interface User {
  id: string
  email: string
}

interface Variables {
  user: User
  supabase: ReturnType<typeof createClient>
}

const meRouter = new Hono<{ Variables: Variables }>()

meRouter.use("/*", authMiddleware)

meRouter.get("/", (c) => {
  const user = c.get("user")

  return c.json({
    user: {
      id: user?.id,
      email: user?.email,
    },
  })
})

export { meRouter }

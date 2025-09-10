import { createClient } from "jsr:@supabase/supabase-js@2"
import { Context, Next } from "hono"

// JWT認証ミドルウェア
export const authMiddleware = async (c: Context, next: Next) => {
  // Authorizationヘッダーからトークンを取得
  const authHeader = c.req.header("Authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Authorization header missing or invalid" }, 401)
  }

  // "Bearer " を除去
  const token = authHeader.substring(7)

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!
  )

  // JWTトークンを検証
  let user, error
  try {
    ({ data: { user }, error } = await supabase.auth.getUser(token))
  } catch {
    return c.json({ error: "Authentication failed" }, 401)
  }
  if (error || !user) {
    return c.json({ error: "Invalid or expired token" }, 401)
  }

  c.set("user", user)
  c.set("supabase", supabase)

  await next()
}

import { Hono } from "hono"
import { createClient } from "jsr:@supabase/supabase-js@2"

const greetRouter = new Hono()

// Supabaseクライアントを作成
const createSupabaseClient = () => {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!
  )
}

greetRouter.get("/", async (c) => {
  const supabase = createSupabaseClient()

  // DBから挨拶を取得
  const { data: greetings } = await supabase
    .from("greetings")
    .select("*")

  // ランダムに1つ選択
  const randomIndex = Math.floor(Math.random() * greetings!.length)
  const randomGreeting = greetings![randomIndex]

  return c.json({
    message: randomGreeting.message
  })
})

export { greetRouter }

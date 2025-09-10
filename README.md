# spajam2025-api

## 環境構築

- 前提条件
    - Node.jsがインストールされている
    - Denoがインストールされている
    - Dockerがインストールされている

```bash
# 依存パッケージのインストール
$ npm install

# ローカルでのSupabaseの起動
$ npx supabase start
```

## その他コマンド

```bash
# リクエストのテスト(匿名ユーザ)
$ curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/hello' \
  --header 'Authorization: Bearer <JWT>' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Functions"}'

# ローカルでのSupabaseの停止
$ npx supabase stop
```

# spajam2025-api

## 環境構築

- 前提条件
    - Node.jsがインストールされている
    - Denoがインストールされている
    - Dockerがインストールされている

```bash
# 依存パッケージのインストール
$ npm install

# DB/認証/ストレージ等の起動
$ npx supabase start

# 関数の起動（ホットリロード有効）
$ npx supabase functions serve

# リクエスト(匿名ユーザ)
$ curl -i --location --request GET 'http://127.0.0.1:54321/functions/v1/api/hello?name=Kazukichi' --header 'Authorization: Bearer <ANON_KEY>'

# ローカルでのSupabaseの停止
$ npx supabase stop
```

## 本番環境へのデプロイ

```bash
# Supabaseにログイン
$ npx supabase login

# 本番環境へのデプロイ
$ npx supabase functions deploy <FUNC_NAME>

# プロジェクトへの参照を取得
$ npx supabase projects list

# 本番環境のAPIキー取得
$ npx supabase projects api-keys --project-ref <PROJECT_REF>

# 本番環境での動作確認
$ curl -i --location --request GET 'https://<PROJECT_REF>.supabase.co/functions/v1/api/hello?name=Takashi' --header 'Authorization: Bearer <ANON_KEY>'
```

## 認証機能の利用方法

```bash
# サインアップ
$ curl -i --location --request POST 'http://127.0.0.1:54321/auth/v1/signup' \
  --header 'apikey: <ANON_KEY>' \
  --header 'Content-Type: application/json' \
  --data '{"email": "test@example.com", "password": "password123"}'

# サインイン
$ curl -i --location --request POST 'http://127.0.0.1:54321/auth/v1/token?grant_type=password' \
  --header 'apikey: <ANON_KEY>' \
  --header 'Content-Type: application/json' \
  --data '{"email": "test@example.com", "password": "password123"}'

# 正当なトークンでの認証必須エンドポイントへのアクセス
$ curl -i --location --request GET 'http://127.0.0.1:54321/functions/v1/api/auth-hello?name=Murata' --header 'Authorization: Bearer <ACCESS_TOKEN>'
```

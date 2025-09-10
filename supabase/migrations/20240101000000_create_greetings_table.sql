-- 挨拶テーブルを作成
CREATE TABLE greetings (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  language VARCHAR(10) DEFAULT 'ja',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 初期データを挿入
INSERT INTO greetings (message, language) VALUES
  ('こんにちは', 'ja'),
  ('Hello', 'en'),
  ('¡Hola', 'es'),
  ('Bonjour', 'fr'),
  ('你好', 'zh');

-- RLS (Row Level Security) を有効化
ALTER TABLE greetings ENABLE ROW LEVEL SECURITY;

-- 全ユーザーが読み取り可能なポリシーを作成
CREATE POLICY "Allow read access to greetings" ON greetings
  FOR SELECT USING (true);

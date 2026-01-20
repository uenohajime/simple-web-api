# simple-web-api

Express.jsを利用したシンプルなWeb APIです。

## インストール

```bash
npm install
```

## 実行

```bash
npm start
```

デフォルトではポート3000で起動します。環境変数`PORT`で変更可能です：

```bash
PORT=8080 npm start
```

## API

### GET /hello

`name`クエリパラメータを受け取り、挨拶メッセージを返します。

**例：**

```bash
curl "http://localhost:3000/hello?name=world"
```

**レスポンス：**

```json
{"message": "hello, world"}
```

`name`パラメータが指定されない場合、デフォルトで"world"が使用されます。

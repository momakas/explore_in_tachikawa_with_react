# explore_in_tachikawa_with_react

## 起動方法
- Dockerインストール
こちらを見てインストールしてください。
https://qiita.com/R_R/items/a09fab09ce9fa9e905c5

- コンテナ起動
```sh:
docker-compose up --build
```
[localhost:3000](http://localhost:3000)で確認


以下、１から環境構築する場合の手順です。（無視してよいです）
## 環境構築
### 参考ページ
- https://qiita.com/hiroki-yama-1118/items/b3388c5dcb155e2e367d
- https://zenn.dev/tady/articles/adcdc65617ae57
- https://qiita.com/takuma-1234/items/d92dbed1c0b2ce2f5ca0
- https://qiita.com/takakou/items/a01af0515f49e90bd05c

### ファイル作成
- docker-compose.yml
```yml:docker-compose.yml
services:
  backend:
    build:
      context: ./backend/
      dockerfile: Dockerfile
    ports:
      - 8080:8080
    volumes:
      - ./backend:/app 
    depends_on:
      - db
  frontend:
    build:
      context: ./frontend/
      dockerfile: Dockerfile
    volumes:
      - ./frontend:/usr/app
    ports:
      - 3000:3000 
  db:
    image: "postgres:15-alpine"
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=db
    volumes:
      - db-store:/var/lib/postgresql/data

volumes:
  db-store:
```

- backend/Dockerfile
```Dockerfile: backend/Dockerfile
FROM golang:latest
WORKDIR /app
```

- frontend/Dockerfile
```Dockerfile: frontend/Dockerfile
# ベースイメージを指定
FROM node:19.4.0
# コンテナ内の作業ディレクトリを設定
WORKDIR /usr/app
```

### backendのアプリケーション作成
```sh:
# backendのコンテナを起動しshellへ入る
docker-compose run backend sh
```
shell内で以下実行
```sh:
# Goモジュールを初期化する
go mod init explore_in_tachikawa_with_react
# HTTPルータの役割をするFWのGinを導入
go get -u github.com/gin-gonic/gin
# main.go を作成
touch main.go
```

- backend/main.go
```go: backend/main.go
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	//Ginフレームワークのデフォルトの設定を使用してルータを作成
	router := gin.Default()
	
	// ルートハンドラの定義
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// サーバー起動
	router.Run(":8080")
}
```

Dockerfileの編集

- backend/Dockerfile
```Dockerfile: backend/Dockerfile
# ベースイメージを指定
FROM golang:latest

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ローカルのソースコードをコンテナにコピー
COPY . .

# 必要なパッケージをインストール
RUN go mod download

# アプリケーションをビルド
RUN go build -o main .

# 公開予定のコンテナのポートを明示
EXPOSE 8080

# アプリケーションを実行
CMD ["go", "run", "main.go"]
```
backendのコンテナ内shellから抜ける
```sh:
exit
```

```sh:
docker-compose up backend --build
```

ブラウザで[localhost:8080](http://localhost:8080)へアクセスして下記が表示されることを確認
> {"message":"Hello, World!"}

## frontendアプリケーションの作成
```sh:
# frontendのコンテナを起動し、shellに入る
docker-compose run frontend sh
```

- Dockerfileを削除する
これはアプリを作成するディレクトリに他のファイルがあると、npxコマンド実行時にコマンド実行ができないためです。
```sh:
rm ./Dockerfile
```

- Reactのアプリケーションを作成
> Vite(ヴィート）とは
<br>
Reactではwebpackが定番のビルドツールですが、webpackを使った開発用ビルドよりも高速にビルドできる
```sh:
npm create vite explore_in_tachikawa_with_react -- --template react-ts
```

package.jsonを書き換えて`npm install`してください
- explore_in_tachikawa_with_react/package.json
```json: explore_in_tachikawa_with_react/package.json
{
  "name": "explore_in_tachikawa_with_react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recoil": "^0.7.4",
    "websocket": "^1.0.34"
  },
  "devDependencies": {
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/websocket": "^1.0.5",
    "@vitejs/plugin-react": "^2.0.0",
    "typescript": "^4.6.4",
    "vite": "^3.0.0"
  }
}
```

また、Dockerを利用する場合はvite.config.tsに以下の追記が必要です
- explore_in_tachikawa_with_react/vite.config.ts
```ts: explore_in_tachikawa_with_react/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
+ server: {
+   host: true,
+ },
});
```

- Dockerfileを再度作成
```sh:
touch Dockerfile
```

- frontend/Dockerfile
```Dockerfile: frontend/Dockerfile
# ベースイメージを指定
FROM node:19.4.0
# コンテナ内の作業ディレクトリを設定
WORKDIR /usr/app/explore_in_tachikawa_with_react

COPY ./explore_in_tachikawa_with_react/package*.json /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/tsconfig*.json /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/vite.config.ts /usr/app/explore_in_tachikawa_with_react/
COPY ./explore_in_tachikawa_with_react/index.html /usr/app/explore_in_tachikawa_with_react/
RUN npm i

EXPOSE 5173
CMD ["npm", "run", "dev" ]
```

docker起動して、[localhost:3000](http://localhost:3000)で起動確認
```
docker-compose up -d --build
```
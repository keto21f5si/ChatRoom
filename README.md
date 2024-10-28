# ChatRoom 💬

## アプリの概要

Node.jsの勉強で作ったチャットルームです。<br />Socket.IOでリアルタイムにしました。

### 主な機能

1. アクセスしたときコンソールに `user connected.` と表示
2. リアルタイムでメッセージを表示
3. コンソールでメッセージを表示

## 使用した技術

- HTML / CSS
- JavaScript
- Node.js
- Express
- Socket.IO

## ホストする

1. **リポジトリのクローン**

```bash
git clone https://github.com/keto21f5si/ChatRoom.git
```

2. **インストール**

```bash
npm install
```

3. **スタート**

**開発用**

```bash
npm run start
```

**本番用**

```bash
npm run dev
```

3000番のポートでチャットアプリが動きます。

## メモ

- `io.~`はすべてのクライアントと通信
- `socket.~`は特定の人とだけ通信

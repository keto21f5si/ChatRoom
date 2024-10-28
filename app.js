const PORT = 3000;
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("user connected.");
  socket.on("eSend", (msg) => {
    console.log(`${msg["user"]}\n> ${msg["message"]}\n`);
    io.emit("eSend", msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

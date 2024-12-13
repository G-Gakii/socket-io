const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "/../public");
const port = 3000;
const app = express();
let server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log(`A new user just connected`);

  socket.on("disconnect", () => {
    console.log("User was disconnected from  server");
  });
});

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});

const express = require("express");
const http = require("http");
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("./public/"));

io.on("connection",(socket) => {
    console.log("a user connected")
    console.log(socket.id)
    socket.on("user-message",msg => {
        io.emit("message",`socket :: ${msg}`);
        console.log(msg)
    })
})

server.listen(9000,()=>{
    console.log("Server is Running on Port 9000");
})
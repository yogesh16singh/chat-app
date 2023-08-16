const express = require("express");
const app = express();
var server = app.listen(8000);
// const http = require("http");
// const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
io.listen(server);
const port = process.env.PORT || 8000
app.get("/", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

io.on('connection', (socket) => {
    console.log("user connected");
    socket.on('disconnect', () => {
        console.log("user disconnected");
    })
});
// io.on("connection", (socket) => {
//     const transport = socket.conn.transport.name; // in most cases, "polling"
//     console.log(transport);
//     socket.conn.on("upgrade", () => {
//         const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"
//     });
// });

// app.listen(port, () => {
//     console.log("server is running");
// });
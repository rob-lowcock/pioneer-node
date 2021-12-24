const io = require("socket.io")({
    cors: {
        origin: "http://localhost:3000",
    }
});
const socketapi = {
    io: io
};

io.on("connection", function(socket) {
    console.log("A user connected!")
});

module.exports = socketapi;
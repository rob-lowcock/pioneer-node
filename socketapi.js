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

    socket.on("focusCard", function(cardId) {
        io.emit("focusCard", cardId)
    });

    socket.on("unfocus", function() {
        io.emit("unfocus")
    })
});

module.exports = socketapi;
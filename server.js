require("dotenv").config();
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");
const request = require("request");
const socketIo = require("socket.io");
const http = require('http');
const config = require('./config.js');
//libreria per gestire connessioni e chiamate http
var express = require("express");
app = express();

const serverHttp = require("http").Server(app);
const io = socketIo(serverHttp);

//libreria per gestire codifiche oggetti JSON
var bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

const server_address = config.SERVER_ADDRESS;
const server_port = config.SERVER_PORT;
const complete_address = server_address + ":" + server_port;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views/draw")));

io.on("connection", (socket) => {
    console.log("Connected: " + socket.id + " " + socket.handshake.query.room);
    socket.on("strokes", (data) => {
        socket.broadcast.emit("strokes", data);
    });
    socket.on("clearDrawing", () => {
        socket.broadcast.emit("clearDrawing");
    });
    socket.on("redraw", (data) => {
        socket.broadcast.emit("redraw", data);
    });
    socket.on("imageState", (data) => {
        socket.broadcast.emit("getImageState", data);
    });
});

//inizializzo server
var server = serverHttp.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Project server start at http://%s:%s", host, port);
});

//ROUTING PAGINE
const room = require("./routes/room.js");
const home = require("./routes/home.js");

app.use('/room', room)
app.use('/', home);

app.get('/draw', (req,res) => {
    res.render('draw/draw', {
        ROOM: '0000',
    })
})




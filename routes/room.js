const express = require("express");
const router = express.Router();

const socket_function = require("../socket/socket.js");

const config = require("../config.js");
const server_address = config.SERVER_ADDRESS;
const server_port = config.SERVER_PORT;
const complete_address = server_address + ":" + server_port;
//Routing su pagina per selezionare la stanza


router.get("/select", function (request, response) {
    if (!request.query.room) {
        response.render("draw/selectroom", {
            createRoom_link: "http://" + complete_address + "/room/create",
            joinRoom_link: "http://" + complete_address + "/room/join",
        });
    }
});

//Routing su pagina nuova room
router.post("/create", function (request, response) {
    socket_function.addRoom(Math.floor(Math.random()*999), 'ciao')
    response.send("nuova room");
});

//Routing su pagina accedi a room
router.post("/join", function (request, response) {
    var room_id = request.body.id;
    var room_psw = request.body.password;
    console.log("ricevuti da richiesta: room "+room_id+" psw: "+room_psw)
    socket_function.joinRoom(room_id, room_psw);
    response.send("join room");
});

module.exports = router;
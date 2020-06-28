const express = require("express");
const router = express.Router();

const config = require('../config.js');
const server_address = config.SERVER_ADDRESS;
const server_port = config.SERVER_PORT;
const complete_address = server_address + ":" + server_port;

//Routing su pagina home (radice)
router.get("/", function (request, response) {
    console.log(config.SERVER_ADDRESS);
    response.render("index/index", {
        client_name: request.connection.remoteAddress,
        players: [{ name: "Daniele" }, { name: "Capo" }, { name: "Sandro" }],
        play_link: 'http://'+complete_address + "/room/select",
    });
});

module.exports = router;
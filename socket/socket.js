//GESTIONE ROOM
var rooms = [];
class Room {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }
}

module.exports.checkRoom = function (id) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].id == id) return rooms[i];
    }
    return false;
};

module.exports.addRoom = function (id, password) {
    rooms.push(new Room(id, password));
    console.log("aggiunta stanza - ID= " + id);
};

module.exports.joinRoom = function (id, password) {
    console.log("checkroom test: " + this.checkRoom(id));
    if (this.checkRoom(id)) {
        console.log("trovata stanza" + id);
        if (this.checkRoom(id).password == password) {
            console.log("Entrato nella stanza " + id);
        } else {
            console.log("password errata");
        }
    } else {
        console.log("stanza non esistente");
    }
};

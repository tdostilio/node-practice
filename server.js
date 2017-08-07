const ws = require('ws');
const fs = require('fs');
const PORT = 8080; // Put in a real port number
let wsServer;

function broadcast (message) {
    server.on('connection', (socket) => {
        socket.on('message', (callback) => {
            console.log(message);
        })
    })
}

function init(callback) {
  wsServer =  new WebSocketServer({ port: PORT });
  wsServer.on('connection', (socket) => {
    callback(socket);
  })
}

module.exports = {
  broadcast: broadcast,
  init: init
};



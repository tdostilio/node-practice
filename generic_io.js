const ws = require('ws');
const fs = require('fs');
const PORT = 8080; // Put in a real port number
const wsServer =  new ws.Server({ port: PORT });

function init(callback) {
  wsServer.on('connection', (socket) => {
    if (callback) {
        callback(socket);
    }
  })
}

function broadcast (message) {
    wsServer.clients.forEach( (client) => {
        client.send(message)
    })
    console.log(message);
};


module.exports = {
  broadcast: broadcast,
  init: init
};



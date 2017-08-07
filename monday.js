const events = require('events');
const ws = require('ws');
const fs = require('fs');
const server = new ws.Server({port: 8080 });
let myEmitter = new events.EventEmitter();


server.on('connection', (socket) => {
    socket.on('message', (msg) => {
        socket.send('Are-there-donuts?');
    })
})


myEmitter.on('Are-there-donuts?', () => {
    let count = checkDonut(); {
        if (count > 0) {    
            myEmitter.emit('hot-donuts-now');
        } else {
            myEmitter.emit('no-donuts');
        }
    } 
})



myEmitter.on('hot-donuts-now', () => {
    goGetDonutsNow();
});

myEmitter.on('no-donuts', () => {
    comeBackLater();
});



myEmitter.emit('hot-donuts-now');

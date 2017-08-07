const krispykreme = require('./krispykreme');
const server = require('./server')

function main() {
  server.init((socket) => {
    socket.send('You are now connected')
    console.log('Someone has connected')
  });
  krispykreme.addHotListener( () => {
      server.broadcast('get deez donuts');
  })
  krispykreme.addNoneListener(()=> {
      server.broadcast('shit outta luck')
    });
}
main();
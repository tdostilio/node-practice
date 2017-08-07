const krispykreme = require('./krispykreme');
const server = require('./server')

function main() {
  krispykreme.addHotListener(server.broadcast('get deez donuts'));
  krispykreme.addNoneListener(server.broadcast('shit outta luck'));
}
main();
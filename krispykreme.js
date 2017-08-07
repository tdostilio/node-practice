
const EventEmitter = require('events').EventEmitter;
const myEE = new EventEmitter();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

setInterval(() => {
  let event;
  if (isEven(getRandomInt(1, 100))) {
    event = 'hot-donuts-now';
  } else {
    event = 'no-donuts';
  }
  myEE.emit(event);
}, 1000);

function addHotListener(callback) {
  myEE.on('hot-donuts-now', callback);
}

function addNoneListener(callback) {
  myEE.on('no-donuts', callback);
}

module.exports = {
  addHotListener: addHotListener,
  addNoneListener: addNoneListener
};


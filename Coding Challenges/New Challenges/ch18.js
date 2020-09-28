var debounce = require('./') // <- this is the file you make;

var sayHi = function() {
  console.log('hi');
};

var debounced = debounce(sayHi, 100);

debounced();
debounced();
debounced();
debounced();

// there should only be one 'hi' message on the console

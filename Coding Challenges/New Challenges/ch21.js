var map = require("./"); // <- this is the file you make;

var numbers = [1, 2, 3];

var doubles = map(numbers, function (number) {
  return number * 2;
});

console.log(doubles); // [2, 4, 6]

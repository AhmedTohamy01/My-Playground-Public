var search = require('./') // <- this is the file you make;

var arr = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];

var foundAt = search(arr, 'cherry'); // 2 since arr[2] === 'cherry'

foundAt = search(arr, 'zebra') // -1 for not found

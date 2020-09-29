var once = require("./"); // <- this is the file you make;

function bootstrapApp() {
  console.log("this should be shown once");
  return 22;
}

var initialize = once(bootstrapApp);
console.log(initialize());
console.log(initialize());

// the console should show:
// this should be shown once
// 22
// 22

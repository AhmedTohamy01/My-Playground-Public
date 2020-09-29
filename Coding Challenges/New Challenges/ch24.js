var transmitter = require("./"); // <- this is the file you make;

var codes = { s: "...", o: "---" };
var message = "sos";
var timeouter = function (fn, ms) {
  setTimeout(fn, ms * 50);
};
var toggle = function () {
  lightbulb.toggle();
};

transmitter(
  {
    codes: codes,
    message: message,
    timeouter: timeouter,
    toggle: toggle,
  },
  function (err) {
    console.log("message sent!");
  }
);

var nextValue = 0;
var asyncFactory = function () {
  var resolveWith = nextValue++;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(resolveWith + "!");
    }, Math.random() * 100);
  });
};

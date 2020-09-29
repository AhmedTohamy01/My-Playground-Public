it("does something async", function () {
  var flag = false;

  runs(function () {
    setTimeout(function () {
      flag = true;
    }, 500);
  });

  waitsFor(function () {
    return flag;
  }, 750);

  runs(function () {
    console.log("asserting...");
    assert(flag === true);
  });
});

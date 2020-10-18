let arr = [
  41,
  73,
  89,
  7,
  10,
  1,
  59,
  58,
  84,
  77,
  77,
  97,
  58,
  1,
  86,
  58,
  26,
  10,
  86,
  51,
];

let arr = [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97];

let rotation = 10;

function test() {
  for (let i = rotation; i > 0; i--) {
    let firstItem = arr[0];
    console.log(firstItem);
    arr.shift();
    console.log(arr);
    arr.push(firstItem);
    console.log(arr);
  }
}

test();

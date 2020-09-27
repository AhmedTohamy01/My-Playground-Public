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
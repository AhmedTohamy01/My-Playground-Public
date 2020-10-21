// 2D Array-DS - HackerRank
// https://www.hackerrank.com/challenges/2d-array/problem

let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourGlass() {
  let finalArr = [];
  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = 0; y < arr.length - 2; y++) {
      let sum =
        arr[x][y] +
        arr[x][y + 1] +
        arr[x][y + 2] +
        arr[x + 1][y + 1] +
        arr[x + 2][y] +
        arr[x + 2][y + 1] +
        arr[x + 2][y + 2];
      finalArr.push(sum);
    }
  }
  let max = Math.max(...finalArr);
  return max;
}

console.log(hourGlass());

// Pseudo code:
// - We should create a for loop to loop over the 2 layers of the array and get the item which can build
//   the "glasshour" diagram.
// - then we get the sum of these items.

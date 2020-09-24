// Arrays: Left Rotation - HackerRank
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem


let arr = [1,2,3,4,5];
let rotation = 4;

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

// Pseudo code:
// - we will create a rotation counter that has number or required rotations.
// - we will save first item in the array in variable.
// - then we will remove the first item in the array.
// - then we will add the removed item to the end of the array.
// - then we will decrease the rotation counter.

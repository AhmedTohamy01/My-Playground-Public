// Arrays: Left Rotation - HackerRank
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem


// let arr = [1,2,3,4,5];

let arr = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];

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

// Pseudo code:
// - we will create a rotation counter that has number or required rotations.
// - we will save first item in the array in variable.
// - then we will remove the first item in the array.
// - then we will add the removed item to the end of the array.
// - then we will decrease the rotation counter.

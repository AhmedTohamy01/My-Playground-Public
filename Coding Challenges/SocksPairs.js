
// Socks Pairs Coding Challenge - Hacker Rank

// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. 
//Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . 
// There are three odd socks left, one of each color. The number of pairs is .


// let arr = [1, 2, 1, 2, 1, 3, 2, 3];

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];


function test(arr) {
  let pairs = 0;
  arr.sort();
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      pairs++;
      i = i + 1;
    }
  }
  return pairs;
}

console.log(test(arr));

// Pseudo code:
// - we set counter for the pairs and set it to 0.
// - we sort the array.
// - we start from 1st item & compare each item to next item
// - if it's matched we increase the pairs counter & jump to the item after the next item.
// - if it's not matched we continue as normal until we reach to the end of the array.
// - we return the number of pairs from pairs counter.


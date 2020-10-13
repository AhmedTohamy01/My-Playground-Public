// Socks Pairs Coding Challenge - Hacker Rank
// https://www.hackerrank.com/challenges/sock-merchant/problem

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function test(arr) {
  let pairs = 0;
  arr.sort();
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
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

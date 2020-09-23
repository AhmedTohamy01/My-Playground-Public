
// Repeated String Coding Challenge - HackerRank
// https://www.hackerrank.com/challenges/repeated-string/problem


function repeatedString(s, n) {
let repeatNum = n / s.length;
let remNum = n % s.length;
let rep = repeatNum + remNum;
  if (s === 'a') {
    let result = n;
    return result;
  } else {
    let result = s.repeat(rep).slice(0,n).split("").reduce((acc, item) => {
      if (item === 'a') {
        acc++;
      }
      return acc;
    }, 0)
    return result;
  }
}


console.log(repeatedString('abc', 10));

// string.repeat()
// string.slice()
// string.split()

// number remaining %

// Pseudo code:
// - we will use .repeat() method to repeat the string.
// - we need to know how many times we need to repeat the string.
// - we will get the 'rep' number by dividing n / s.length , but may be there is a remaining numbers.
// - we will get the remaining number by dividing n % s.lenght.
// - then the rep number will be the sum of both above numbers.
// - then we will do the repeat for the word using .repeat() method.
// - then we will limit the number of characters to n by using the .slice() method.
// - then we will convert the string to array using .split() method.
// - then we will .reduce() method to iterate over each item in the array and increate
//   the counter if the item was 'a'.
// - then we will return back the counter.
// - we will add another seperate condition to cover the case of s = 'a' with big number.
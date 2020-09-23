
// Counting Valleys - HackerRank
// https://www.hackerrank.com/challenges/counting-valleys/problem


let path = 'DDUUDDUDUUUD';

function CountingValleys() {
  let stepsArr = path.split("");
  let currentPos = 0;
  let positions = stepsArr.reduce((accum, item) => {
    if (item === 'U' ) {
      currentPos++;
      accum.push(currentPos);
    } if (item === 'D') {
      currentPos--;
      accum.push(currentPos);
    }
    return accum;
  }, []);
  
  let valley = 0;
  if (positions[0] < 0) { valley++ };
  for (let i = 0; i < positions.length; i++) {
    if (positions[i] === 0 && positions[i+1] < 0 ) {
      valley++;
    }
  }
  return valley;
}


console.log(CountingValleys());

  // Pseudo code:
  // - we will use .split() method to convert the path string to array.
  // - we wil setup a counter to know the currect position of the hiker now, 
  //   0 means he is sea-level, - value means he is in valley, + value means he is 
  //   on a mountin.
  // - we will use .reduce() method to map over array and convert the letter to numbers,
  //   either 0 or + number or - number in a new array called "positions".
  // - we will set a counter to count the valleys and set it to 0.
  // - If the first value in "positions" array was - value, the value counter will increase. because 
  //   this means he enter a valley.
  // - then we will iterate over the position array items, if we found any item that has 0 and next value
  //    is - value, this means he enter a valley, so we will increase the valley counter again.

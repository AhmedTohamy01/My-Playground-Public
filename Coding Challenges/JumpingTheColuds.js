// Jumping on the Clouds - HackerRank
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem


let clouds = [0,0,1,0,1,0,0];

function test() {
  let jumps = 0;
  for (let i = 0; i < clouds.length; i++) {
    if (clouds[i+2] === 0) {
      jumps++;
      i += 1;
      // console.log(jumps)
    } else if (clouds[i+1] === 0) {
      jumps++;
      // console.log(jumps)
    }
  }
  return jumps;
}

console.log(test());


  // Pseudo code:
  // - we will create a counter for the jumps and set the value to 0.
  // - we will create a for loop to iterate over each item in the array and "i" in 
  //   for loop will be considered the location of sally.
  // - we will check if the jump after 2 steps is 0 or not, if yes we will jump, increase jump counter , and
  //   change the "i" value to i+=1 and the loop will increase it again through i++ , this equal to 2, which
  //   is the current position of sally.
  // - if the jump sfter 2 steps is 1, we will just jump to the next step, increase the jumps counter and do
  //   nothing else, since the "i" will increase by default through the loop itself. 

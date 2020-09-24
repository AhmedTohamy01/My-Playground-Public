// let q = [2,1,5,3,4];
let q = [1, 2, 5, 3, 7, 8, 6, 4]



function test() {
  let counter = 0;
  for (let i = 0; i < 8; i++) {
    if (q[i] > q[i+1]) {
      let currentItem = q[i]
      q[i] = q[i+1];
      q[i+1] = currentItem;
      counter ++;
      console.log(q);
    }
  }
  return counter;
}

console.log(test());
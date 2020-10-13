// let q = [2,1,5,3,4];
// let q = [1, 2, 5, 3, 7, 8, 6, 4]
// let q = [1, 2, 5, 3, 4, 7, 8, 6];
// bad
let q = [5, 1, 2, 3, 7, 8, 6, 4];
// let q = [2, 5, 1, 3, 4]

function test() {
  let sortQ = [...q].sort();
  let counter = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > q[i + 1]) {
      let currentItem = q[i];
      q[i] = q[i + 1];
      q[i + 1] = currentItem;
      counter++;
      i = 0;
      let oldLabel = sortQ.indexOf(currentItem);
      let newLabel = q.indexOf(currentItem) - 1;
      // console.log(oldLabel);
      // console.log(newLabel);
      if (oldLabel - newLabel > 2) {
        i = 100;
        counter = "Too chaotic";
      }
    }
  }
  return counter;
}

console.log(test());

// if ((sortQ.indexOf(q[i]) - i) > 2) {
//   console.log('Too chaotic');
//   return 'Too chaotic';
// }

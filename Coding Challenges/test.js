// let q = [2,5,1,3,4];
let q = [2,1,5,3,4];


function test() {
  let counter = 0;
    if (q[0] < q[1]) {
      console.log('Too chaotic');
    } else if (q[0] > q[1]) {
      for (let i = 0; i < q.length; i++) {
        if (q[i] > q[i+1]) {
          let currentItem = q[i]
          q[i] = q[i+1];
          q[i+1] = currentItem;
          counter ++;
      }
    } 
    console.log(counter);
    }
}
console.log(test());
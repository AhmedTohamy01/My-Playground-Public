function test() {
  let sortQ = [...q].sort();
  let counter = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > q[i+1]) {
        let currentItem = q[i]
        q[i] = q[i+1];
        q[i+1] = currentItem;
        counter ++;
        i = 0;
        let oldLabel = sortQ.indexOf(currentItem);
        let newLabel = q.indexOf(currentItem)-1;
        // console.log(oldLabel);
        // console.log(newLabel);
        if ((oldLabel - newLabel) > 2) {
          i = 100;
          counter = 'Too chaotic';
        }
      }
  }
  return counter;
}

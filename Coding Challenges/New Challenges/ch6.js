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

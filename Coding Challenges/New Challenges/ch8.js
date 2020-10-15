function twoNumberSum(array, targetSum) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let reqNum = targetSum - array[i];
    // console.log(reqNum);
    if (newArr.includes(reqNum)) {
      //  console.log(newArr.includes(reqNum));
      return [reqNum, array[i]];
    } else {
      newArr.push(array[i]);
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

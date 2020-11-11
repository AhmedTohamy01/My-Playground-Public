function twoNumberSum(array, targetSum) {
  let hash = {}
  for (let i = 0; i < array.length; i++) {
    // O(n) T | O(1) S
    let reqNum = targetSum - array[i] // O(1) T | O(1) S
    if (reqNum in hash) {
      // O(1) T | O(1) S
      return [reqNum, array[i]] // O(1) T | O(1) S
    } else {
      hash[array[i]] = null // O(1) T | O(n) S
    }
    //  console.log(hash);
  }
  return []
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

function hourGlass() {
  let finalArr = [];
  for (let x = 0; x < arr.length-2; x++) {
    for (let y = 0; y < arr.length-2; y++) {
      let sum = arr[x][y] + arr[x][y+1]+ arr[x][y+2]+ arr[x+1][y+1]+ arr[x+2][y]+ arr[x+2][y+1]+ arr[x+2][y+2]; 
      finalArr.push(sum);
    }
  }
  let max = Math.max(...finalArr);
  return max;
}
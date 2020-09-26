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
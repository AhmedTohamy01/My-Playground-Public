
// let steps = ['U','D','D','D','U','D','U','U']
//  ['U','U','U','D','U','D','U','U','D','D','D','D','D','D','U','U']

let path = 'DDUUDDUDUUUD';

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


console.log(CountingValleys());

// console.log(positions);
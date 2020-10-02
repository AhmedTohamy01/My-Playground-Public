function test() {
  let jumps = 0;
  for (let i = 0; i < clouds.length; i++) {
    if (clouds[i + 2] === 0) {
      jumps++;
      i += 1;
      // console.log(jumps)
    } else if (clouds[i + 1] === 0) {
      jumps++;
      // console.log(jumps)
    }
  }
  return jumps;
}

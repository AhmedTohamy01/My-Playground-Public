function repeatedString(s, n) {
  let repeatNum = n / s.length;
  let remNum = n % s.length;
  let rep = repeatNum + remNum;
    if (s === 'a') {
      let result = n;
      return result;
    } else {
      let result = s.repeat(rep).slice(0,n).split("").reduce((acc, item) => {
        if (item === 'a') {
          acc++;
        }
        return acc;
      }, 0)
      return result;
    }
  }

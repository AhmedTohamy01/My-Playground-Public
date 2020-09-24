let votes = ["Laura", "Emily", "Louise", "Natasha", "Emily", "Lilly", "Louise", "Laura", "Mary", "Mary"]

function test(votes) {
  let uniqueNames = votes.reduce((accum, item) => {
    if (accum.includes(item)) {
      return accum;
    } else {
      accum.push(item);
      return accum;
    }
  }, [])
  console.log(uniqueNames);

  let scoreCards = uniqueNames.map((item) => {return {name: item, score: 0}});
  console.log(scoreCards);

  scoreCards.map((item) => {
    for (let i = 0; i < votes.length; i++) {
      if (item.name === votes[i]) {
        item.score++;
      }
    }
  }); 
  console.log(scoreCards);

  let maxScore = Math.max(...scoreCards.map((item) => { return item.score }));
  console.log(maxScore);

  let winners = scoreCards.reduce((accum, item) => {
    if (item.score === maxScore) {
      accum.push(item.name);
    }
    return accum;
  },[])
  console.log(winners);

  winners.sort();
  console.log(winners);

  let finalWinner = winners[winners.length - 1];
  return finalWinner;
}

console.log(test(votes));
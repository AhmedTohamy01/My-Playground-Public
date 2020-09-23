let votes = 
['mona','ahmed', 'ahmed', 'ahmed', 'mona', 'noha', 'marwa', 'marwa', 'marwa', 'jomana', 'hala', 'noor', 'noor']

// ahmed 3 , marwa 3 , mona 2, noor 2, jomana 1, hala 1
console.time()
function winner() {
  let winners = votes.reduce((acc, item) => {
    if (acc.includes(item)) {
      acc = acc;
    } else {
      acc.push(item);
    }
    return acc
  }, [])
        .map((item) => {
         return {name: item, score: 0};
        });
        
        winners.reduce((acc, item) => {
            for (let i = 0; i < votes.length; i++) {
              if (item.name === votes[i]) {
                item.score++;
              }
            }
            return acc;  
          }, []);

          let winScore = Math.max(...winners.map((item) => item.score));

          let finalWinner = winners.reduce((acc, item) => {
            if (item.score === winScore) {
              acc.push(item.name);
            }
            return acc
          },[]);

          if (finalWinner.length === 1) {
            finalWinner = finalWinner;
          } else {
            finalWinner = [finalWinner[finalWinner.length - 1]]
          };

  console.log(finalWinner);
}

winner();
console.timeEnd()

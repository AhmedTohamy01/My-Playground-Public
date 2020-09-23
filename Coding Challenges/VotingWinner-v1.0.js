// this is a voting challnege, we have some persons and people vote for them,
// this votes going to array, and we need to know who is the winner,
// the result should be an array contains the name of the winner. 
// if 2 or more persons has the same number of votes the last name in the SORTED array
// will be the winner.


let votes = 
['mona','ahmed', 'ahmed', 'ahmed', 'ahmed', 'mona', 'noha', 'marwa', 
'marwa', 'marwa', 'jomana', 'hala', 'noor', 'noor', ]
// real votes are = ahmed 4 , marwa 3 , mona 2, noor 2, jomana 1, hala 1
console.time() // to caclulate runtime.

function winner() {
    let uniNames = [];
    for (let i = 0; i < votes.length; i++) {
        if (uniNames.includes(votes[i])) {
            uniNames = uniNames;
        } else {
            uniNames.push(votes[i]);
        }
    }
    console.log(uniNames); // to get the names of all winners regardless how many votes they have.

    /////////////////

    let objNames = uniNames.map((item) => {
        return {name: item, score: 0};
    })

    console.log(objNames); // to convert each name in a form or object has 2 keys, name & scroe, and set the default score to 0 for everyone.
  

    /////////////////

    for (let i = 0; i < objNames.length; i++) {
        for (let j = 0; j < votes.length; j++) {
            if (objNames[i].name === votes[j]) {
                objNames[i].score++;
            }
        }
    }
   
    console.log(objNames); // to count the votes and modify vote score foreach person.

    /////////////////

    let winScore = Math.max(...objNames.map((item) => { return item.score}));
    console.log(winScore);  // to know the highest scroe number

    /////////////////// 

    let winners = objNames.reduce((winners, item) => {
        if (item.score === winScore) {
            winners.push(item.name);
        }
        return winners
    },[])

    console.log(winners); // to return the list of winnners

    /////////////////

    let finalWinner = [];
    if (winners.length === 1) {
        finalWinner = winners;
    } else {
        finalWinner.push(winners[winners.length - 1]);
    }
    
    console.log(finalWinner); // to return the final winner is there are multiple equal votes.
}

winner();

console.timeEnd(); // to caclulate runtime.
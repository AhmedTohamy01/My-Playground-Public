let votes = 
['mona','ahmed', 'ahmed', 'ahmed', 'ahmed', 'mona', 'noha', 'marwa', 'marwa', 'marwa', 'jomana', 'hala', 'noor', 'noor', ]

// ahmed 3 , marwa 3 , mona 2, noor 2, jomana 1, hala 1
console.time()
function winner() {
    let uniNames = [];
    for (let i = 0; i < votes.length; i++) {
        if (uniNames.includes(votes[i])) {
            uniNames = uniNames;
        } else {
            uniNames.push(votes[i]);
        }
    }
    console.log(uniNames);

    /////////////////

    let objNames = uniNames.map((item) => {
        return {name: item, score: 0};
    })

    console.log(objNames);

    /////////////////

    for (let i = 0; i < objNames.length; i++) {
        for (let j = 0; j < votes.length; j++) {
            if (objNames[i].name === votes[j]) {
                objNames[i].score++;
            }
        }
    }
   
    console.log(objNames);

    /////////////////

    let winScore = Math.max(...objNames.map((item) => { return item.score}));
    console.log(winScore);

    /////////////////

    let winners = objNames.reduce((winners, item) => {
        if (item.score === winScore) {
            winners.push(item.name);
        }
        return winners
    },[])

    console.log(winners);

    /////////////////

    let finalWinner = [];
    if (winners.length === 1) {
        finalWinner = winners;
    } else {
        finalWinner.push(winners[winners.length - 1]);
    }
    
    console.log(finalWinner);
}

winner();
console.timeEnd()

// makr a new array of objects, each object represent a unqiue person, and has 2 keys, name & value, value is 0

// for (let i = 0; i < votes.length; i++) {
//     for (let j = 0; j < uniNames.length; i++) {
//         if (votes[i] === uniNames[j]) {
//             console.log(objNames[j].name);
//         }
//     }
// }

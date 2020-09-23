let votes = 
['ahmed', 'ahmed', 'ahmed', 'mona', 'mona', 'noha', 'marwa', 'marwa', 'marwa', 'jomana', 'hala', 'noor', 'noor', ]

let arr = [
  { name: 'mona', score: 2 },
  { name: 'ahmed', score: 8 },
  { name: 'noha', score: 1 },
  { name: 'marwa', score: 3 },
  { name: 'jomana', score: 1 },
  { name: 'hala', score: 1 },
  { name: 'noor', score: 2 }
]


function test() {
  let winNum =  Math.max.apply(null, arr.map((item) => { return item.score; }));
  return winNum
}





console.log(test());
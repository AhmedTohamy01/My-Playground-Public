fetch('https://api.thecatapi.com/v1/images/search')
.then((fetchedData) => fetchedData.json);

console.log(fetchedData.json);

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then( (fetchedData) => {return fetchedData.json()})
.then( (jsonData) => {console.log(jsonData)})
.catch((error) => {console.log(error)});
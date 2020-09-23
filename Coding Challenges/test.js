let num = { number: 5}

function test(num) {
  num.number++;
  return num.number;
}
console.log(test(num));
console.log(num.number);


// test(num);
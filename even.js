const isEven = function (num){
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);


console.log(tenIsEven);
console.log(elevenIsEven);

//or

console.log(isEven(10)) //less code, more efficent way to console.log the same thing as above
console.log(isEven(11)); // same with this one 
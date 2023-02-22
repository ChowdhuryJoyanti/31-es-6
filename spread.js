const max = Math.max(12,84, 5656,768);
console.log(max)
const number = [12,84, 5656,768];
const largest = Math.max(...number)
console.log(number)
// console.log(...number)
// console.log(largest);

// const numbers2 = number;
// const numbers2 = [number];
const numbers2 = [...number];
number.push(55);
numbers2.push(555)
 console.log(number)
 console.log(numbers2);

const numbers3 = [...number] ;

const numbers4 = [444,78,...number,111]

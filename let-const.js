// 1 breakup with bar
// no more use of var
// let is to reasign
// cosnt : do not allow it to reassign

let money = 25;
money = 35;
console.log(money);


const bird = 'jan pakhi';
// bird = 'moyna pakhi';
const message = bird +'potas potas'
console.log(message);

const numbers = [12,34,65,89,78];
// reassign is not allow
 numbers.push(123);
 numbers[1]=90;
 console.log(numbers);


const student = {
    name:'mofiz',
    address:'Rongpur',
}
// student = {name:'mofazzel'} 
student.name = 'Mofazzol';


for(let i = 0;i < numbers.length ;i++){
    const number = numbers[i];
   
}
console.log(number)
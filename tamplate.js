const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trump`;


const multilne = 'first line text \n' +
'second line of code \n ' + 
'third line of text \n' +
'Fourth line of string \n';
console.log(multilne);

const newMultiline =`
first line text
second line of code
third line of text
`
console.log(newMultiline)

const a = 20;
const b= 30;
const nums = [78,598,86,969,07,99]
const summary = 'sum of :' + a + 'and '  + b + 'is: '  + (a+b);
console.log(summary)

const newSummary = `sum of ${a} and ${b} is :${a+b}`;
console.log(newSummary);
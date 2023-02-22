function add(first,second){
    const total = first +second;
    return total; 
}
const result = add(12,20);
console.log(result)

function fullName (first,last ='chowdhruy'){
    const name = first + '' + last;
    return name;
}
const name = fullName('Joyanti')
console.log(name);
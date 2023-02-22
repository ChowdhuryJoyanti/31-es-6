const fish = {
    name :'king Hilsa',
    address :'Chandpur',
    color :'silver',
    phone:0843997349,
    price: 4000,
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;


console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);
console.log(fish.phone);

const {age,name} = {name:'Almas', age:67 ,profession:'developer'};
console.log(age)

const {address}=fish;
console.log(address)

// array destructering
const [first,another] = [44,54,55,7,88,99]
console.log(first,another);

const nayoks = ['sakib' ,'bapy', 'raj'];
const [king ,list,notun] = nayoks;
console.log(notun)


function getNames(){
    return['Alim','Halim'];

}
const [baba,caca] = getNames();
console.log(caca ,baba)
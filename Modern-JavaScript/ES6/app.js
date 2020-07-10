// rest parameter
const double = (...nums) => {
    // do something
    console.log(nums);
    return nums.map(nums => nums*2);
}

const result =  double(1,2,3,4,5,6,7,8,9);
console.log(result);


// spread syntax (arrays)
const people =  ['shaun', 'ryu', 'crystal']
console.log(...people);

const members = ['mario','chunli', ...people];
console.log(members);

// spread syntax (objects)
const person = {name: 'shaun',age: 30, job: 'net ninja'};
const personClone ={...person};
console.log(personClone);

// SETS
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);
const namesSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
console.log(namesSet);

const uniqueNames = [...namesSet];
console.log(uniqueNames);

const unique = [...new Set(namesArray)];
console.log(unique);

const ages = new Set();
ages.add(20);
console.log(ages);
ages.delete(25);
console.log(ages.size);
console.log(ages.has(30));
console.log(ages.has(20));
ages.clear();
console.log(ages);

// loop
const ninjas = new Set([
    {name: 'shaun', age:30},
    {name: 'crystal', age: 20},
    {name: 'chun-li', age: 32}
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
})


// SYMBOLS
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolOne);
console.log(typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja ={};
ninja.age =30;
ninja['belt'] ='orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);
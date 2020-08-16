const name = 'John';
console.log(name);

const person = {
    name: 'John',
    age: 30
}

console.log(person.age);

person.name = 'Sarah';
person.age = 3;

console.log(person);

const numbers = [1,2,3,4,5]
numbers.push(6);
console.log(numbers);

// primitive data types
const names = 'John Doe';
console.log(typeof name);
const ages = 30;
console.log(typeof ages);
const car = null;
console.log(typeof car);
const sysm = Symbol();
console.log(typeof sym);


const hobbies = ['movies', 'music'];
const address = {
    city: 'Boston',
    state: 'MA'
}

const today = new Date();
console.log(typeof today);

// Type Conversions
let val;
// convert number to string
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

//  boolean to a string
val = String(true);
console.log(typeof val);
val =(5).toString();
val =(true).toString();
console.log(val);
console.log(val.length);

// string to number
val = Number('5')
val= Number(true);
val = Number('Hello');
console.log(val);

val = parseInt('100');
console.log(val);

const val1 =5;
const val2 =6;
const sum = val1 + val2;
console.log(sum);

val = Math.random();
console.log(val);
val = Math.floor(Math.random()*20);
console.log(val);

// Strings and concatenation
const firstName='William';
const lastName = 'Johnson';
val = firstName + lastName
val = firstName + " " + lastName;


val = 'Hello, my name is ' + firstName + ' and I am ' + ages;
val = 'That\'s awesome, I can\'t wait';
val = firstName.length;
val = firstName.concat(' ', lastName);
val = firstName.toUpperCase();
val = firstName[0];
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);
// substring
val = firstName.substring(0, 4);

const str = 'Hello there my name is Jay';
const job = 'Web Developer';
const city = 'Miami';
const age = 30;

// slice()
val = firstName.slice(0, 4);
val =  firstName.slice(-3);
val= str.split(' ');
val = str.replace('Jay', 'Brad');

console.log(val);

let html;
html = '<ul><li>Name: ' + name + '</li><li>Job: '+ job + ' </li><li>City: ' + city + '</li></ul>';

document.body.innerHTML = html;


// Arrays
const numbers1 = [43,56,33,23,44,36,5];
const numbers2 =  new Array(22, 45, 76, 54, 33);
const fruits = ['Apples', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
val =numbers1.length;
console.log(val);

// check if is Array
val = Array.isArray(numbers1);
console.log(val);
val = numbers1[3];
console.log(val);

val = numbers1[0];
console.log(val);

numbers1[2]= 100;
val = numbers1.indexOf(36);
console.log(val);
numbers1.push(250);
console.log(numbers1);
numbers1.unshift(120);
console.log(numbers1);
numbers1.pop();
console.log(numbers1);
numbers1.shift();
console.log(numbers1);

// splice values
numbers1.splice(1,1);
console.log(numbers1);
numbers1.reverse();
console.log(numbers1);

val = numbers1.concat(numbers2);
console.log(val);
val = fruits.sort();
console.log(val);
val = numbers1.sort();
console.log(val);

// sort
val = numbers1.sort(function(x,y){
    return x - y;
});

console.log(val);

// reverse sort
val = numbers1.sort(function(x, y){
    return y - x;
});

console.log(val);

// Find
function under50(num){
    return num < 50;
}

val = numbers1.find(under50);
console.log(val);

function over50(num){
    return num > 50;
}
val = numbers1.find(over50);
console.log(val);

// Object Literals
const persons = {
    firstName: 'Steve',
    lastName: 'Smith',
    hobbies: ['music', 'sports'],
    age:30,
    email: 'email@gmail.com',
    address:{
        city: 'Miami',
        state: 'Fl'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
}

val = persons;
console.log(val);
val = person.firstName;
console.log(val);
val = persons.age
console.log(val);
val = persons.getBirthYear();
console.log(val);

const peoples = [
    {name: 'John', age: 30},
    {name: 'James', age: 33}
];

// Date and time
const dates =  new Date();
let birthDay = new Date('9-10-1981');
val = dates;
console.log(val);
console.log(typeof val);

val = birthDay;
console.log(val);
val = dates.getMonth();
console.log(val)
val = dates.getDate();
console.log(val);

birthDay.setMonth(2);
console.log(birthDay);

// IF
const id = 100;

if(id === 1100){
    console.log('correct');
} else{
    console.log('incorrect')
}

// not equal to
if(id != 101){
    console.log('correct')
} else{
    console.log('incorrect');
}

// test if a variable is declared
if(typeof id !== undefined){
    console.log(`The Id is ${id}`);
} else{
    console.log(`No Id`);
}

if(id > 200){
    console.log('correct');
} else{
    console.log('incorrect')
}


const color = 'red';
if(color === 'red'){
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('color is blue');
} else{
    console.log('color is not red or blue');
}

// logical Operators
const name1 = 'Steve';
const age1 = 20;

if(age1 > 0 && age1 < 12)
{
    console.log(`${name1} is a child`);
} else if(age1 > 13 && age <= 19){
    console.log(`${name1} is a teenager`);
} else{
    console.log(`${name1} is an adult`);
}

// tenary operator
console.log(id === 100 ? 'correct' : 'incorrect');


// SWITCH
switch(color){
    case 'red':
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is neither blue nor red');
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        console.log('Its a Sunday.');
        break;

    case 1:
        day = 'Monday';
        console.log('Its a Monday.');
        break;

    case 2:
    day = 'Tuesday';
    console.log('Its a Tuesday.');
    break;

    case 3:
        day = 'Wednesday';
        console.log('Its a Wednesday.');
        break;

    case 4:
    day = 'Thurday';
    console.log('Its a Thurdsay.');
    break;

    case 5:
        day = 'Friday';
        console.log('Its a Friday.');
        break;

    case 6:
    day = 'Saturday';
    console.log('Its a Saturday.');
    break;

}

// FUNCTIONS
function greet(firstName ='John' , lastName ='Doe'){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

//  function expression
const square = function(x = 3){
    return x * x;
};
console.log(square());

// immidiately invoked function expressions - IIFEs
(function(){
    console.log('IIFE Ran...');
})();

(function(name){
    console.log('Hello ' + name);
})('Brad');

// property methods
const todo  = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    },
    delete: function(){
        console.log('Delete todo...');
    }
}

todo.add();
todo.edit(3);
todo.delete();

// LOOPS
for(let i = 0; i < 10; i++){
    if( i === 2){
        console.log('2 is my favourite number');
        continue;
    }

    if(i === 5){
        console.log('Stop the loop');
        break;
    }

    console.log('Number ' + i);
}

// while
let i = 0;
while(i < 10){
    console.log('Number from a while ' + i);
    i++;
}

//  do while
let x = 0;
do{
    console.log('Number from a do while ' + x);
    x++;
}
while(x < 10);

// loop through an array
const cars =['Ford', 'Chevy', 'Honda', 'Toyota'];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// using a foreach
cars.forEach(function(car){
    console.log(car)
})

cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);
    console.log(array);
})

// map
const users =[
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Karen'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

// FOR IN
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    // console.log(x);
    console.log(`${x}: ${user[x]}`);
}

// Window Object
// window.alert('Hello World');
// const input = prompt();
// alert(input);
// if(confirm('Are you sure')){
//     console.log('YES');
// } else{
//     console.log('NO');
// }

val = window.outerHeight;
val = window.outerWidth;
console.log(val);

val = window.scrollY;
console.log(val);

// location Object
val = window.location;
console.log(val);


val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search;
console.log(val);

// redirect
// window.location.href = 'https://google.com';

// History Object
window.history.go(-1);
val = window.history.length;
console.log(val);

val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
val = window.navigator.appVersion;
console.log(val);
val = window.navigator.userAgent;
console.log(val);
val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);

// SCOPE

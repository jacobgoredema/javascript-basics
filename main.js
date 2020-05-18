const age =30;
const name='John';
const s='technology, computers, IT, code';

//arrays
const numbers= new Array(1,2,3,4,5);
let fruits=['apples','oranges','pears'];
fruits.push('mangos');
fruits.unshift('berry');

//
let person={
    firstName:'John',
    lastName:'Joe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'39 Caledon Drive',
        city:'Boston',
        state:'NA',
    }
}

let todos=[
    {
        id:1,
        text:'Take out trash',
        isComplete:true
    },
    {
        id:2,
        text:'Take out bin',
        isComplete:true
    },
    {
        id:3,
        text:'Take out car',
        isComplete:false
    }
]


//json
let todoJson=JSON.stringify(todos);
console.log(todoJson);

// for loops
for(let i=0; i< 10; i++){
    console.log(i);
}

// looping through arrays
for(let i=0;i<todos.length;i++)
{
    console.log('For loop Number: ${i}');
}

// foreach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
})

//map
const todoText=todos.map(function(todos){
    return todos.text;
})

// filter

let todoCompleted = todos.filter(function(todos){
    return todos.isComplete===true;
});
console.log(todoCompleted);

console.log(todos.text);

console.log(todos);
console.log(todos[1].text);

console.log(person);
console.log(person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
person.email='test@gmail.com';
console.log(person);

console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[2]);
console.log('my name is and my age is ' + age);
console.log(`My name is ${name} and i am ${age}`)
console.log(name.length);
console.log(name.substring(0,2));
console.log(s.split(', '));
console.log(numbers);
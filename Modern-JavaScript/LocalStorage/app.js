// store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

//  get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// updating data
localStorage.setItem('name', 'luigi');
localStorage.age = '40';
console.log(name, age);

// delete items from local storage
// localStorage.removeItem('name');
// name = localStorage('name');
// console.log(name);

// remove everything from localstorage.
localStorage.clear()

// stringfting and Parsing Data
 const todos =[
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'},

    ];


// 
localStorage.setItem('todos',JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));
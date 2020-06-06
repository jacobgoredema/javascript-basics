// function declaration
function greet(){
    console.log('Hello there');
}

//function expression
// argument and parameters
const speak = function(name){
    console.log(`good day ${name}`);
}

// const calcArea = function(radius){
//     return 3.14 * radius **2;
//     //return area;
// };


// arrow function
// const calcArea = (radius) =>{
//     return 3.14 * radius**2;
// }

// arrow function simplified
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log(area);
greet();
speak('mario');

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total +=products[i] + products[i] * tax;
//     }

//     return total;
// }

// arrow function version
const bill = (products,tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total +=products[i] + products[i] * tax;
    }

    return total;
};

console.log(bill([10,15,30], 0.2));

//  function
const names = 'shaun';
const greets = () => 'hello';
let resultOne = greets();
console.log(resultOne);

// methods
let resultTwo = names.toUpperCase();
console.log(resultTwo);

// callback functions
const myFunc = (callBackFunc) => {
    let value = 50;
    callBackFunc(value);
};

myFunc(function(value){
    console.log(value);
});

// arrow function of myFunc
myFunc(value =>{
    console.log(value);
})

let people = ['mario', 'luigi', 'shaun', 'chun-li', 'ryu'];

people.forEach(function(person){
    console.log(person);
});


people.forEach((person, index) =>{
    console.log(index, person);
});

const logPerson =(person, index) =>{
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

// Callback functions
const ul = document.querySelector('.people');
const peoples = ['mario', 'luigi', 'shaun', 'chun-li', 'ryu'];
let html = ``;

// peoples.forEach(function(persons){
//     // create html template
//     html += `<li style="color: purple">${persons}</li>`;
// });

peoples.forEach(persons =>{
    //  create html template
    html +=`<li style = "color: purple";>${persons}</li>`;
}); 

console.log(html);
ul.innerHTML = html;
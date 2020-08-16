// let val;
// val = document.all;
// val = document.all.length;
// val = document.head;
// val = document.contentType;
// console.log(val);

// val = document.forms
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.links;
// val = document.links[0];
// val = document.links[0].classList;


// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');
// console.log(val);

// // DOM SELECTORS
// console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').id);
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // change content
// const taskTitle = document.getElementById('task-title')
// taskTitle.textContent = 'Task List';
// taskTitle.inner = 'My Tasks';

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
// document.querySelector('li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(odd').style.background = '#ccc';
// document.querySelector('li:nth-child(3').style.color = 'yellow';

// // Select more than 1 element
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// // tag name
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color ='red';
// lis[3].textContent = 'Hello World';

// // convert html collection into an array
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent =` ${index}: Hello`;
// });

// //queryselectorAll(
// const item = document.querySelectorAll('ul.collection li.collection-item');
// console.log(item);

// item.forEach(function(item, index){
//     item.textContent = `${index} : Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = 'green';
// }

// // Traversing the dom
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li-collection-item:first-child');
// val = listItem;
// console.log(val);

// val = list;
// console.log(val);

// // get child nodes
// val = list.childNodes;
// console.log(val);
// // get childeren element nodes
// val = list.children
// console.log(val);
// val = list.childNodes[0].nodeName;
// console.log(val);

// list.children[0].textContent = 'Helloooo';
// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastChild;
// val = list.lastElementChild;
// console.log(val);

// // count child elements
// val = list.childElementCount;
// console.log(val);

// // get parent node
// // val = listItem.parentNode;
// // val = listItem.nextSibling;
// console.log(val);

// // CREATE AN ELEMENT
// const element = document.createElement('li');
// console.log(element);
// // add a class
// element.className = 'collection-item';
// console.log(element);
// element.id = 'new-item';
// console.log(element);
// element.setAttribute('title', 'New Item');
// console.log(element);

// // create a node and append
// element.appendChild(document.createTextNode('Hello World Z'));
// console.log(element);

// // create new link element
// const link = document.createElement('a');

// // add classes
// link.className = 'delete-item secondary-content';

// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// element.appendChild(link);

// // append li as a child to ul
// document.querySelector('ul.collection').appendChild(element);
// console.log(element);

// // REPLacing ELEMENTS
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// // new text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // get the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');
// // replace
// cardAction.replaceChild(newHeading, oldHeading)
// console.log(element);

// // REMOVE ELEMENT
// const itemList = document.querySelectorAll('li');
// const listz = document.querySelector('ul');
// // remove list item
// itemList[0].remove();
// // remove child element
// listz.removeChild(itemList[3]);

// // CLASSES AND ATTRIBUTES
// // const firstLi = document.querySelector('li:first-child');
// // let linke = firstLi.children[0];
// // val = linke.className;
// // val = linke.classList;
// // val = linke.classList[0] ;
// // linke = classList.add('test');
// // linke.classList.remove('test');
// // val = link;


// // EVENTS
// document.querySelector('.clear-tasks').addEventListener('click', onclick);

// function onclick(e){
//     console.log('hello');
//     e.preventDefault();
//     let val;
//     val = e;

//     // event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.className;
//     val = e.target.classList;
//     e.target.innerText = 'Hello';

//     // event Type
//     val = e.type;

//     // timestamp
//     val = e.timestamp;
//     val = e.clientY;
//     val = e.clientX;

//     console.log(val);
// }


// // Mouse Events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h2');

// // click
// clearBtn.addEventListener('click', runEvent);

// // double click
// clearBtn.addEventListener('dblclick', runEvent);
// // mouse down
// clearBtn.addEventListener('mousedown',runEvent);

// // mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// // mouse enter
// card.addEventListener('mouseenter', runEvent);
// // mouseleave
// card.addEventListener('mouseleave', runEvent);
// // mouseout
// card.addEventListener('mouseout', runEvent);

// // mousemove
// card.addEventListener('mousemove', runEvent);
// // event handler
// function runEvent(e){
//     console.log(`Event Type: ${e.type}`);
//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb( ${e.offsetX},  ${e.offsetY}, 40)`
// }


// // INPUT AND KEYBOARD
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const header = document.querySelector('h2');
// // clear input
// taskInput.value = '';
// form.addEventListener('submit', runEvents);

// taskInput.addEventListener('keydown', runEvents);

// function runEvents(e){
//     console.log(`Event Type: ${e.type}`);
//     e.preventDefault();
//     console.log(e.target.value);
//     header.innerText = e.target.value;



























// }




// LOCAL AND SESSION STORAGE
// set local storage item
localStorage.setItem('name','John');
localStorage.setItem('age', '30');
// localStorage.removeItem('name');
// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

// set session storage item
sessionStorage.setItem('name', 'Beth');

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    localStorage.setItem('task',task);
    console.log('Task Saved');

    let tasks;
    if(localStorage.getItem('tasks') === null){
        task =[];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});
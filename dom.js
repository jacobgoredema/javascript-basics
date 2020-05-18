// selecting elements from dom
console.log(window);

// single elements
let form=document.getElementById('my-form');
console.log(form);

document.querySelector('h1');

//multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// looping through elements
const items= document.querySelectorAll('.item');
items.forEach((items)=> console.log(items));

const ul =document.querySelector('.items');
// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='Jay';
ul.lastElementChild.innerHTML='<h1>Hello</h1>';

const btn=document.querySelector('.btn');
// btn.style.background='red';

//events
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');
    console.log(e);
    console.log(e.target);

    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');

    // change text
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';

});

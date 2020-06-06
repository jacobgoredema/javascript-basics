// query Selector
const para=document.querySelector('p');
const div =document.querySelector('div.error');
console.log(para);
console.log(div);

// return all paragraphs
const paras=document.querySelectorAll('p');
console.log(paras);

paras.forEach(paras =>{
    console.log(paras);
})

// get an element by  Id
const title = document.getElementById('page-title');
console.log(title);

// get elements by Classname
const errors= document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

const pa =document.getElementsByTagName('p');
console.log(pa);
console.log(pa[1]);

// Adding & changing Page Content
const paragraph = document.querySelector('p');
console.log(paragraph.innerText);
paragraph.innerText='ninjas are awesome!';
console.log(paragraph.innerText);



const content = document.querySelector('.content');
console.log(content.innerHTML);

const people =['mario', 'luigi', 'yoshi'];
people.forEach(person =>{
    content.innerHTML +=`<p>${person}</p>`;
})

// Adding and removing classes
const contents =document.querySelector('p');
console.log(contents.classList);
contents.classList.add('error');
contents.classList.remove('error');
contents.classList.add('success');

const pap =document.querySelectorAll('p');
pap.forEach(p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
    //console.log(p.textContent);
})

// toogle
const tt= document.querySelector('.title')
tt.classList.toggle('test');
// tt.classList.toggle('test');

// Parent, child and siblings
const article = document.querySelector('article');
console.log(article.children);
console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach(child =>{
    child.classList.add('article-Element');
});

// ====Parent Element=====
const titles = document.querySelector('h2');
console.log(titles.parentElement);
console.log(titles.parentElement.parentElement);
console.log(titles.nextElementSibling);
console.log(titles.previousElementSibling);
console.log(title.nextElementSibling.parentElement.children);

// Events

// const button = document.querySelector('button')
// button.addEventListener('click',() =>{
//     console.log('you clicked me');
// });

const ul = document.querySelector('ul');
// ul.remove();

const button =  document.querySelector('button');
button.addEventListener('click',() =>{
    // ul.innerHTML +='<li>something new';
    const li =document.createElement('li');
    li.textContent = 'something new todo';
    ul.append(li);
    // ul.prepend(li)
});

// const items= document.querySelectorAll('li');
// items.forEach(item =>{
//     item.addEventListener('click',e => {
//         // console.log('item clicked');
//         // console.log(e);
//         // console/log(item)
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

// Event Delegation and bubbling
ul.addEventListener('click', e =>{
    // console.log('event in Ul');
    // console.log(e.target);
    // console.log(e);
    if(e.target.tagName === 'LI')
    {
        e.target.remove();
    }
});

// MORE DOM EVENTS
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('OI! my content is copyright');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent=`x pox - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e=>{
    console.log(e.pageX, e.pageY);
})

// POPUP
const btn= document.querySelector('.show-popup');
const popup = document.querySelector('.popup-wrapper');
const close =  document.querySelector('.popup-close');

btn.addEventListener('click', () =>{
    popup.style.display= 'block';
});

close.addEventListener('click', () =>{
    popup.style.display = 'none';
});

popup.addEventListener('click', () =>{
    popup.style.display ='none';
});
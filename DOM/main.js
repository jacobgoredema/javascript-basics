console.dir(document.domain);
console.log(document.URL);
console.log(document.title)
console.log(document.body);
console.groupCollapsed(document.forms);
console.log(document.images);

//selectors
//get elementbyid
var headerTitle= document.getElementById('header-title');
console.log(headerTitle);
console.log(headerTitle.textContent);
console.log(headerTitle.innerHTML);
headerTitle.innerHTML='<h3>hello</h3>'
headerTitle.style.borderBottom='solid 3px #000';

//get elementByClassName
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#fafafa';
}

// getElementByTagName
var li=document.getElementsByTagName('li');
console.log(li);
console.groupCollapsed(li[1]);
li[1].textContent='Hello 2';
li[1].fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}

// querySelector used mainly for first element it picks
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value='Hello World';

var submit=document.querySelector('input[type="submit"]');
submit.value="Send";

var item=document.querySelector('.list-group-item');
item.style.backgroundColor='red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.backgroundColor='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

//querySelectorAll
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

var odd= document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)')

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}

// traversing the DOM
var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor=='#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.background='orange';
console.log(itemList.parentElement.parentElement.parentElement);

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

// FirstChild same can be done with lastChild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

// siblings
console.log(itemList.nextSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';

//add attre
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivText=document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);
//insert into dom
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize='30px';
console.log(newDiv);

//Event listener
function buttonClick(e){
    document.getElementById('header-title').textContent='changed';
    document.querySelector('#main').style.backgroundColor='brown';
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);

    // var output = document.getElementById('output');
    // output.innerHTML='<h3>+e.ttarget.id</h3>';
    // console.log(e.altKey);

}

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
}




var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button element
    var deleteButton = document.createElement('button');

    //Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteButton.appendChild(document.createTextNode('x'));

    // append button to li
    li.appendChild(deleteButton);
    //append li to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
LoadEventListeners();

function LoadEventListeners(){
    // Add a task
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // Clear task event
    clearBtn.addEventListener('click', clearTask);

    // Filter tasks events
    filter.addEventListener('keyup', filterTasks);

    // DON Load Event
    document.addEventListener('DOMContentLoaded', getTasks)
}

// Get Tasks from Local Storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(task));
        // create new link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove></i>';
        // Append the link li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create a new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Clear Input
    taskInput.value ='';

    // Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    e.preventDefault();
}

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log(e.target);
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();

            // remove from Local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// remove from Local storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.foreach(function(task, index){
        if(taskItem.textContent === task)
            tasks.splice(index, 1);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear Tasks
function clearTask(){
    // taskList.innerHTML = '';
    // or
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
 
    // Clear from localStorage
    clearTasksFromLocalStorage(); 
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 
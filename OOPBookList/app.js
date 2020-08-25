// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}





// UI Constructor
function UI(){

}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // create tr element
    const row = document.createElement('tr');
    
    // insert cols
    row.innerHTML =`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

// Show alert
UI.prototype.ShowAlert = function(message, className){
    // create div
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);

    // timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();

    }, 3000);
}

// Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // instantiating a book
    const book = new Book(title, author, isbn);
    
      // instantiating UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn ===''){
        // Error alert
        ui.ShowAlert('Please fill all fields', 'error');
    } else{
        // Add book to list
        ui.addBookToList(book);

        // show success
        ui.ShowAlert('book added!', 'success');
        // clear fields
        ui.clearFields();

    }

    e.preventDefault();
});

// Event listener for delete.
document.getElementById('book-list').addEventListener('click', function(e){
    // instantiate UI
    const ui = new UI();
    // Delete book
    ui.deleteBook(e.target);

    // Show message
    ui.ShowAlert('Book Removed!', 'success');

    e.preventDefault();
});
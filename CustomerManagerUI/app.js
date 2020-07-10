$(document).ready (function(){
    // open the database
    var request = indexedDB.open('customerManager', 1);
    // var db;

    request.onupgradeneeded = function(e){
        var db = e.target.result;

        if(!db.objectStoreNames.contains('customers')){
            var os =db.createObjectStore('customers', 
            {
                keyPath: "id",
                autoIncrement:true
            });

            // create index for name
            os.createIndex('name', 'name', {unique:false});
        }
    }

    // success Handler
    request.onsuccess = function(e){
        console.log('success: Opened Database....');
        db = e.target.result;

        // show Customers
        showCustomers();
    }

    // error Handler
    request.onerror = function(e){
        console.log('Error: Could not Open database ...');
    }
    
});

// Add Customer
function addCustomer(){
    var name = $('#name').val();
    var email = $('#email').val();

    var transaction = db.transaction(["customers"], "readwrite");

    // ask for the objectStore
    var store = transaction.objectStore("customers");

    //  Define Customer
    var customer = {
        name: name,
        email: email
    }

    // Perform the Add
    var request = store.add(customer);

    // Success Callback
    request.onsuccess = function(e){
        window.location.href = "index.html";

    }

    // Error Callback
    request.onerror = function(e){
        alert("Sorry the customer was not added");
        console.log('Error', e.target.error.name);
    }
}

// Display Customers
function showCustomers(e){
    var transaction = db.transaction(["customers"], "readonly");

    // Ask for object
    var store = transaction.objectStore("customers");
    var index = store.index('name');

    var output = '' ;
    index.openCursor().onsuccess = function(e){
        var cursor = e.target.result;
        if(cursor){
            output +="<tr id='customer_"+cursor.value.id+"'>";
            output += "<td>"+cursor.value.id+"</td>";
            output += "<td><span class='cursor customer' contenteditable='true' data-field='name' data-id='"+cursor.value.id+"'>"+cursor.value.name+"</span></td>";
            output += "<td><span class='cursor customer' contenteditable='true' data-field='name' data-id='"+cursor.value.id+"'>"+cursor.value.email+ "</span></td>";
            output += "<td><a href=''>Delete</a></td>";
            output += "</tr>";

            cursor.continue();
        }

        $('#customers').html(output);

    }
}

// Delete selected Customer
function removeCustomer(){
    var transaction = d.transaction(["customers"], "readwrite");

    //  ask for objectStore
    var store = transaction.objectStore("customers");
    var request = store.delete(id);

    // Success Message
    request.onsuccess = function(){
        console.log('customer ' +id+ ' Deleted');
        $('customer_'+id).remove();
    }

    // Error Message
    request.onerror = function(e){
        alert("Sorry, the customer was not removed");
        console.log('Error', e.target.error.name);
    }
}

// clear all customers
function clearCustomers(){
    indexedDB.deleteDatabase('customerManager');
    window.location.href='index.html';
}

// Update Customers
$('#customers').on('blur', '.customer', function(){
    // Newly entered Text
    var newText = $(this).html();

    // field
    var field = $(this).data('field');

    // customer id
    var id =$(this).data('id');

    // Get transaction
    var transaction = db.transaction(["customers"], "readwrite");

    // Ask for ObjectStore
    var store = transaction.objectStore("customers");

    var request = store.get(id);

    request.onsuccess = function(){
        var data = request.result;
        if(field == 'name'){
            data.name= newText;
        } else if( field == 'email'){
            data.email = newText;
        }

        // store Update Text
        var requestUpdate= store.put(data);

        requestUpdate.onsuccess = function(){
            console.log('customer field updated');
        }

        requestUpdate.onerror = function(){
            console.log('Error: Customer field could not be updated');
        }
    }

})
const http = new EasyHTTP;

// Get POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    
//     if(err){
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });

// GET Single Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    
//     if(err){
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });


// Create Data for posting
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err){
//         console.log(err)
//     } else{
//         console.log(post);
//     }
// });

// Update a Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

// Delete a Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err);
    } else{
        console.log(response);
    }
});

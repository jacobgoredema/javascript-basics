// http Requests
const getTodos = (callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 400 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 400) {
                reject('could not fetch the data');
            }
        });

        // request.open('GET','https://jsonplaceholder.typicode.com/todos/');
        request.open('GET','todos.json');
        request.send();
    });
};

// console.log(log1)

getTodos('todos.json').then(data =>{
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err)
});

// getTodos((err, data) => {
//     console.log('callback fired');
//     console.log(err, data);
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//  Promises example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// });




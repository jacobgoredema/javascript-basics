// fetch api
fetch('todos.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});

// async and await simplfying the above fetch API
const getTodos = async () => {
    const response = await fetch('todos.json');
    if(response.status !== 200){
        throw new Error('cannot etch the data');
    }
    
    const data = await response.json();
    return data;
    // console.log(data);
};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message));


const form = document.querySelector('.sign-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,20}$/;

form.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(form.username.value);

    // Validation
    const username = form.username.value;
    if(usernamePattern.test(username)){
        feedback.textContent='that user is valid';
    } else
    {
        feedback.textContent = 'invalid feedback character range';
    }
});

//  Live feedback
form.username.addEventListener('keyup', e =>{
    // console.log(e);
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        // console.log('passed');
        form.username.setAttribute('class','success');
    } else{
        // console.log('failed');
        form.username.setAttribute('class','error');
    }
});

// const username = 'shaun';
// const pattern =/^[a-z]{6,}$/;
// let result =pattern.test(username);
// console.log(result);

// if(result){
//     console.log('regex test passed :)');
// } else{
//     console.log('regex test failed');
// }

// let res = username.search(pattern);
// console.log(res);




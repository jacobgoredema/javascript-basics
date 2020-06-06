// console.log("I am a string");
// let email='jacob@gmail.com';
// let result=email.lastIndexOf('m');
// let results=email.slice(0,5);
// let result1=email.substr(3,4);
// let result2= email.replace('m','e');

// console.log(result);
// console.log(results);
// console.log(result1)
// console.log(result2);

// template string
// const title= 'Best reads of 2019';
// const author='Jay';
// const likes=30;
// let result='The blog called '+title+' by '+author+' has '+likes+' likes';
// let results=`The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);
// console.log(results)

// let html=`
//     <h2>${title}</h2>
//     <p> By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

//Arrays
// let ninjas=['shaun','ryu','chun-li']
// ninjas[1]='ken';
// console.log(ninjas[1]);
// console.log(ninjas);

// let random=['shaun','crystal',30,20];
// console.log(random);
// console.log(ninjas.length);

//Array Method
// let result=ninjas.join(',');
// console.log(result);
// let results= ninjas.indexOf('chun-li');
// console.log(results);
// let result1=ninjas.concat(['ken','crystal']);
// console.log(result1);
// let result2=ninjas.push('ken');
// result=ninjas.pop();
// console.log(result);

// NULL and Undefined
// let age;
// console.log(age, age+3, `the age is ${age}`);

// booleans and comparison
// let email='jacob@gmail.com';
// let result=email.includes('@');
// console.log(result);

// let names=['mario','luigi','toad'];
// let results=names.includes('jay');
// console.log(results);

// let age=25;
// console.log(age==25);
// console.log(age!=25);
// console.log(age==30);
// console.log(age>20);

// let name='shaun';
// console.log(name=='shaun');
// console.log(name=='Shaun');
// console.log(name>'crystal');
// console.log(name>'Shaun');
// console.log(name>'Crystal');


// Loose vs Strict Comparison
// let age=25;
// console.log(age==25);
// console.log(age !=25);
// console.log(age !='25');
// console.log(age===25);
// console.log(age==='25');
// console.log(age!==25);
// console.log(age!=='25');


// type conversion
//let score='100';
// score=Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result='hello';
// result=Number(result);
// console.log(result);
// let results=String(50);
// console.log(results, typeof results);

// let result1=Boolean(100);
// console.log(result1,typeof result1);


// For Loops
// for(var i=0;i<5;i++){
//     console.log('in loop: ',i);
// }

// const names = ['shaun','mario', 'luigi'];

// for(i=0;i<names.length;i++)
// {
//     let html =`<div>${names[i]}</div>`;
        // console.log(names[i]);
//     console.log(html);
// }

// WHile Loops
// const names = ['shaun','mario', 'luigi'];
// let i=0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// Logical operators
// const score=[50,25,0,30,100,20,10]
// for(var i=0;i<score.length;i++)
// {
//     console.log('your score: ',score[i]);

//     if(score[i]===1000){
//         console.log('you got the top score!');
//         break;
//     }

//     i++;
// }

// switch
// const grade='D';
// switch(grade){
//     case 'A':
//         console.log('you got an A');
//         break;
//     case 'B':
//         console.log('you got a B');
//         break;
//     case 'C':
//         console.log('you got a C');
//         break;
//     case 'D':
//         console.log('you got a D');
//         break;
//     default:
//         console.log('not a valid grade');
//         break;
// }
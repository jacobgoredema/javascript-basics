const x=10;
const y=14;

if(x===10){
    console.log('x is 10');
}
else{
    console.log('x is not 10');
}

//tenary operator
const color=x>10?'red':'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue') ;
        break;
}

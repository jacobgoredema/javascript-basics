const scores = [10, 30, 15, 25, 50, 40, 5];

scores.filter(score => {
    return score >20;
});
console.log(scores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);

// MAP Method
const prices =[ 20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map(price => {
    return price /2;
});
console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}

];

const saleProduct = products.map(product => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};
    } else{
        return product;
    }
});

console.log(saleProduct);

// Reduce Method
const score = [10, 20, 60, 40, 70, 90, 30];
const result = score.reduce((accumulator, current) =>{
    if(current > 50){
        accumulator++;
    }

    return accumulator;
}, 0) // zero is the initial argumaent of the acumulator

console.log(result);

const games = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'chun-li', score: 60},
    {player: 'mario', score: 40},
    {player: 'mario', score: 50},
    {player: 'mario', score: 70},
    {player: 'mario', score: 500}
];

const marioTotal = games.reduce((accumulator, current) => {
    if(current.player === 'mario'){
        accumulator += current.score
    }

    return accumulator;
}, 0)

console.log(marioTotal);

// Find Methods
const finds = [10, 5, 0, 40, 30, 10, 90, 70];
const firstHighScore =finds.find(score =>{
    return score > 50;
});

console.log(firstHighScore);

// Sort Method
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
names.sort();
console.log(names);

scores.sort();
scores.reverse();
scores.sort((a,b) => {
    return b - a;
});

scores.sort((a,b) =>{
    return a -b;
});

console.log(scores);

const players = [
    {name: 'mario', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'jacob', score: 70},
    {name: 'chun-li', score: 60},
    {name: 'nashe', score: 40},
    {name: 'thando', score: 50},
    {name: 'Ex', score: 80},
    {name: 'Philip', score: 52}
];

players.sort((a,b) =>{
    if(a.score > b.score)
    {
        return -1;
    } else if (b.score > a.score){
        return 1;
    } else{
        return 0;
    }
});

console.log(players);

players.sort((a,b) =>{
    return b.score - a.score;
});

console.log(players);

// Chaining Array Methods
const product = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const filtered = product.filter( prod =>{
    prod.price > 20;
});

const promos = filtered.map(prod =>{
    return `the ${prod.name} is ${prod.price / 2} Rands`;
})

// method chaining
const promo = product
    .filter(prod =>prod.price >20)
    .map(prod => `the ${prod.name} is ${prod.price / 2} Rands`);

console.log(promo);
console.log(promos);
// classes
class User{
    constructor(username,email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log('just logged in')
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(){
        users = users.filter((u) => {
            return u.username !==userOne.username;
        })
    }
}

const userOne =  new User('mario', 'mari@gmail.com');
const userTwo = new User('luigi', 'luig@gmail.com');
const userThree =  new Admin('shaun', 'shaun@gmail.com', 'black-belt-ninja');

console.log(userOne, userTwo,userThree);
userOne.login();
console.log();
userOne.incScore();

let users =  [userOne, userTwo, userThree];
console.log(users);


userThree.deleteUser(userTwo);
console.log(users);
console.log(userThree);


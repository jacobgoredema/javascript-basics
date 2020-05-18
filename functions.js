function addNums(num1, num2){
    return num1+num2;
}

console.log(addNums(5,7));

// OOP
function Person(firstName, lastName, dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
    
}

// prototying
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}

// class
class Persons{
    constructor(firstName,lastName, dob){
        this.firstName=firstName;
        this,lastName=lastName;
        this.dob=dob;
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

// instantiate object
const person1=new Person('John', 'Doe','4-3-1980');
const person2= new Person('Mary','Smith','3-6-1970');

console.log(person2);
console.log(person1);
console.log(person1.getBirthYear);
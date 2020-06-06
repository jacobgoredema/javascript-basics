// const blogs =[
//     {title:'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 25}
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'jacob@gmail.com',
    location: 'Nokem Park',
    blogs: [
        {title:'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 25}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs:function(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    },

    // logblogs: function(){
    //     console.log(this);
    // }
};

// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil);
console.log(Math.trunc(area));

const random= Math.random();
console.log(random * 100);

console.log(user);
console.log(user.name);
console.log(user['email']);
user['name'] = 'chu-li';
console.log(user['name']);
console.log(user['location']);
console.log(typeof user);
user.login();
user.logout();
console.log(this);
user.logBlogs();

// Primitive types and reference types
let scoreOne =50;
let scoreTwo =  scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);
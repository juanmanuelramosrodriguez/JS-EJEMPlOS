//objetos literarios usuario en linea
const blogs=[
    {title:'why mac & cheese rules',likes:30},
    {title: '10 things to make with marmite', likes:50}
];
console.log(blogs);
let user={
    name:'Luis',
    age: 20,
    email:'ArtySint_123@hotmail.com',
    location: 'México',
    blogs: [    
    {title:'why mac & cheese rules',likes:30},
    {title: '10 things to make with marmite', likes:50}],
    login(){
        console.log('the user logged in')
    },
    logout(){
        console.log('the user logged out')
    },
    logBlogs(){
        console.log(blogs);
        console.log(this.blogs);
        console.log('this user has written the following blosg:');
        this.blogs.forEach(blog=>{
            console.log(blog.title,blog.likes);
        })
    }
};
console.log(user);
console.log(user.name);
user.age=21;
console.log(user.age);
const key = 'location';
console.log(user['email']);
user['name'] = `Artemio`;
console.log(user['name']);
console.log(user[key]);
console.log(user['location']);
user.login();
user.logout();
const name='maria';
name.toUpperCase();
user.logBlogs();
console.log(this);
//objetos matematicos
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
//creacion de numeros random
const random = Math.random();
console.log(random);
console.log(Math.round(random));
console.log(Math.round(random*100));
let scoreOne=50;
let scoreTwo=scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);
scoreOne=100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);
const userOne={name:'Luis',age:20};
const userTwo=userOne;
console.log(userOne,userTwo);
userOne.name='Mario';
console.log(userOne,userTwo);
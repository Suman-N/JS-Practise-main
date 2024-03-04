// objects are collection of dat with key-value pair

// let's understand object litreals

const mySym = Symbol('key1') // declaring of symbol

const user = {
    name: "Suman", // remember behind the scene object keys are alwys taken as a string only
    "fullName": "Suman Nandal", // no matter u r declaring like this or as above
    [mySym]: "mykey",
    age: 20,
    address: {
        state: 'KA',
        city: "Bengaluru" 
    },
    isLoggedIn: true,
    lastLoggedinDays: ["Monday", "Thursday"],

}

console.log(user);

// accessing of object with .(dot) notation and bracket[] notation 

console.log(user.name); //with .notation
console.log(user["fullName"]); // with [] notation
console.log(typeof user[mySym]);

user.greetings = function () {
    return "Hello User"
}

console.log(user.greetings());

console.log(user);


//Merging of two objects

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = Object.assign({}, obj1, obj2) //assign method is used to merge two objects {} empty brackets
// will store the variables 

// console.log(obj3);
// console.log(obj1);

// Merging the objects with spread operators

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//we can access the keys and values of the objects with methods it will return an array

const obj = Object.keys(user)
const obbj = Object.values(user)
const obbjj = Object.entries(user)

console.log(obj);
console.log(obbj);
console.log(obbjj);

// object destructuring

const jsUser = {
    name: "Angel",
    Address: "India"
}

 const {name: fullnm} = jsUser

 console.log(fullnm);
// Memory in JS

// There are only two types of Memory in JS Stack and Heap

// 1>. stack => premitive (String, Number, Boelean, bigint, symbol, null, undefined)


// Note: Below example is passed by value when u declare a variable and assign some value to it 
// =(assign operator) will create a space in memory and store your value and returns the location 
// of stored value and when you pass your value(suman) to anotherName it will the 
// value (only assigned value) not a refrence(location of stored value) instead it will create a 
// new space new location in memory // This will happen in stack (primitive datatype only)

let name = "Suman"

let anotherName = name
anotherName = "Vijay" // what if i will update anotherName value............

console.log(name); //outputs Suman
console.log(anotherName); // outputs Vijay

//2>. Heap => non-Premitive or Refrence (object, Array, Function)

// in Heap or Non-primitive they are sharing refrence means direct location of stored value so it 
// will outputs the same
let obj = {
    name: "Suman",
    age : "20"
}

let obj1 = obj 

obj1.name ="Vijay"
obj1.email = "Suman@yahoo.com"

console.log(obj); //outputs obj values
console.log(obj1); // outputs the same like obj

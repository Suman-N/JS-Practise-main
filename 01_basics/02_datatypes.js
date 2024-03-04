// Primitive Datatypes

// number = 123 typeof number will be number
// string = "Suman" typeof string will be string
// boolean - either true or false
// null = standalone value typeof null will be an object
// undefined = variable is decalred but value is not assigned means value is undefined typeof undefined is undefined

let num = 132
let string = "Suman"
let bool = true;
let nullValue = null
let undefinedValue = undefined

console.table([num, string, bool, nullValue, undefinedValue])

// wwe can check type of variable with using typeof keyword of JS
console.log(typeof num)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof nullValue)
console.log(typeof undefinedValue)

// Non-Primitive datatypes

// Object
// An object is collection of data having key-value pair
let obj = {
    name: "Suman",
    age: "18",
    isLoggedIn: true
}

// Array
// An array is collection of data with diffrent datatypes
let arr = ["suman", 18, true]

console.log(obj);
console.log(arr);
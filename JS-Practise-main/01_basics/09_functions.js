//functions are block of code designed to perform a perticular task a JAVASCRIPT functions are excuted when 
// someone calls(invokes) it

function myName() {
    // console.log("my name is Suman Shaka");
}
myName // this is only refrence of function
myName() //This is execution of function

function userName(username) { // in this () whatever we will pass it call parameter it will receive value
    // console.log(username); //it will just print username in console

    return username // after return statement nothing will work no console or nothing
    console.log(username); // it will not print anything
}

// userName("Suman") //we have to pass some value as an argument while calling a function

const result = userName("Suman") //this will store result in variable
// console.log(result); //return undefined because we are not returning anything

// NOTE: After return statement function will not do any operations

const bool = Boolean(undefined) //by default undefined boolean value is false 
// console.log(bool);

//A function with if else statement

function jsUserName(name) {
if(!undefined){
    // console.log("please enter user name"); // if this condition will execute then return null
    return //if this will true then another return will not work
}
    return name
}
const res = jsUserName("")
// console.log(res)



// A function with REST(...) parameter 
//Rest parameter defines a combination of an already spreaded data
//rest parameter will always remian at last
// suppose of there is any function with lots of parameter like any items u r trying to add in ur cart

function addingItemsToTheCart(val1, val2, ...values) { //in this case first two args will go in val1 and val2 rest will go in ...values
    return values
}
console.log(addingItemsToTheCart(200, 400, 500, 600, 800, 100));



// Array with an object

const obj = {
    user: "Suman",
    Address: "Banglore",
    pincode: 560046
}

function funcWithObjects(anyObject){
    return `user name is ${anyObject.user} she is living in ${anyObject.Address} 
    her pincode is ${anyObject?.pincode}`
}
console.log(funcWithObjects(obj));

function funcWithAnArray(getArray) {
    return getArray[6]
}
console.log(funcWithAnArray([200, 100, 50, 63, 89, 15643, 654653, 56, 6546]));


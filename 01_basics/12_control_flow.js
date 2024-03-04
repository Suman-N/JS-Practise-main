// conttrol flow and logical statements with logical operators

//if else condition

const userLoggedIn = true //if condition

if (userLoggedIn) {
    console.log("User is logged in successfully");
}


const age = 20 

if(age < 20){ // if else condition
    console.log("Your age is below 20");
}
else{
    console.log("Your age is 20");
}

const sumanAge = 18

if(sumanAge < 18){ //if else if condition
    console.log("Suman is not an Adult yet");
}
else if(sumanAge > 18){
    console.log("Suman is above 18 now");
}else{
    console.log("Suman is older");
}




// switch case statement

const month = 13
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Default case match");
        break;
}

// if else woth && and || operator

const debitCard = true

if(userLoggedIn && debitCard){
    console.log("User loggged in with debit card");
}

if(userLoggedIn || debitCard){
    console.log("User loggged in");
}


//  let's understand soe truthy and falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN       // these are falsy values by default

// true, 'false', "0", [], {}, " " // these are the truthy values by default

const user = undefined

if(user){
    console.log("user is true");
}else{
    console.log("user is false");
}

// How to check empty array and empty objects value

const array = []
if (array.length === 0){ // we can check the array with length method
    console.log("Array is empty");
}else{
    console.log("Array is containing some values");
}

const object = {}

if (Object.keys(object).length === 0){ // we can access the keys of object with keys method
    console.log("Object is empty");
}else{
    console.log("object is containing a value");
}

// nullish coleacion value

const a = 5 ?? 10
const b = null ?? 10

console.log(a);
console.log(b);

// turnary operator

const color = "green"

color == "green" ? console.log("color is green") : console.log("color is orange")
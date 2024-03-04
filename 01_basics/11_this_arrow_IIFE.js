// This keyword will refer current context only

// console.log(this); // will return global empty {} object

const user = {
    username : "Suman",
    address: "Ahmedabad",
    age: 27,
    welcomeMessage: function name() {
        console.log(this.address);
        console.log(this.age);
        console.log(this.username);
        console.log(this.welcomeMessage);
        console.log(this.console);
        console.log(this.log);
        console.log(this.name);
        console.log(this.user);

    }
}

// user.welcomeMessage()


// in ES6 Arraow functions are introduced

const arraow = () => {
    console.log("Hi I am arrow function");
}

// arraow();

() => {} // syntax of arrow function

const hello = () => "Hello"
// console.log(hello());

// IIFE Immediate invoked function expression

// () () // first () for function defination and second () for execution

((name) => {console.log(`Hello ${name}`)})("Suman");

(function () {
    console.log(`"HI Sumna"`)
})()
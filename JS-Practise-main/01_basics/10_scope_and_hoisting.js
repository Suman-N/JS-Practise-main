// scope levels

function one(){
    const name = "Suman"
    function two() {
        const sirname = " Nandal"
        function three() {
            const middleName = " V"
            console.log(name + middleName + sirname);
        }
        // console.log(middleName); //gives an error beacuse of scope level declaration
        three()
    }
    
    two()
    // console.log(sirname); // we can not access sirname because of scope level declarations

}

one()
// console.log(name); // we can not access name here because it is out of scope






// ++++++++++++++++++++++++++++++++++ Hoisting ++++++++++++++++++++++++++++++++++

// basic function declaration
console.log(addOne(10));  // in this kind of function declarations we can access the function before intilizations
function addOne(num) {
    return num + 1
    
}

// console.log(addTwo(5)); // here we can not access before initilization bcz addTwo variable is holding our function
const addTwo = function(value) {
    return value + 2
}

console.log(addTwo(5));



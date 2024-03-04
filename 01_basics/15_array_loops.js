// for of loops are used to itrate over the values of an array and string


const arr  = [1, 2, 3, 4, 5, 6]
for (const i of arr) {
    // console.log(i);
    
}

const string = "Suman Nandal"
for(const i of string){
    if(i == " "){
        continue
    }
    // console.log(i);
}

// map is an object of JS

const map = new Map()   // map will take unique values only it will not print duplicate values
map.set("IN", "India")
map.set("Fr", "France")
map.set("USA", "United State of America")

// console.log(map);

for (const key of map) {
    // console.log(key);   // will reurn the values in array
    
}


// for in Iterate (loop) over the properties of an object:

const person = {fname:"John", lname:"Doe", age:25};

for (const key in person) {
// console.log(person[key]);

}

const array = ["js", "cpp", "python", "java", "ruby"]

for (let key in array){
    // console.log(`${key} => ${array[key]}`);
}


// foreach loop 

// foreach loop will accept an callback function to print the 

//a foreach loop has an access of item(values), index and a whole array also

const coding = ["js", "cpp", "python", "java", "ruby"]

coding.forEach( (v, d, a, ) => {
// console.log(v, a, d);
});

const userDetails = [
    {
        name: "Suman",
        age: 27
    },
    {
        name: "Vijay",
        age: 30
    },
    {
        name: "Nisha",
        age: 28
    }
]

userDetails.forEach( (item, index, k) => {
    console.log(item, index, k);
})
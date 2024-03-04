//Array

const arr = [0, 1, "Suman", true, 2365.896] // An Array is a collection of data having diffrent data types

console.log(arr);

//methods of any array

// console.log(arr.push("Vijay")); // This method will add an element at the end of the array
// console.log(arr);

// console.log(arr.pop()); // no need give the value in (method) this method will remove the last element from
// // array
// console.log(arr);

// console.log(arr.unshift(123)); // This method will add the element at the start of the array
// console.log(arr);

// console.log(arr.shift()); //will remove the first element of an array
// console.log(arr);

// Let's understand some questionary methods of an array

// console.log(arr.includes(1)); // outputs true

// console.log(arr.includes(2)); // outputs false

// console.log(arr.indexOf(1)); // will returns the index of given value

// console.log(arr.indexOf(100)); // If u r asking for the value of index which does not exist in Array
// will return -1


const newArray = [0, 1, 2, 3, 4, 5, 6]

// console.log(newArray);

const newArr = newArray.slice(1, 4)
// console.log(newArr); // This method will make a slice of array from 1 to 3 it will not include 4

// console.log(newArray);

const newArr1 = newArray.splice(1, 4)
// console.log(newArr1); //  This method will includes the range and will make a slice and remove 
// from original array

// console.log(newArray);

// Array concatination with ... spread operator

//in earlier we used to do with concat() method

const arr1 = [1, 2, 3]

const arr2 = [4, 5, 6]

const arr3 = arr1.concat(arr2) // will return new array with concatination of two arrays tha's why u 
// have to store it in new array
console.log(arr3);

//Note: nowadays we are using spread operator to merge two arrays 

const arr4 = [... arr1, ...arr2]
console.log(arr4);

// The Array.isArray() static method determines whether the passed value is an Array.

// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);



// The Array.of() static method creates a new Array instance from a variable number of arguments

console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []




// The Array.from() static method creates a new, shallow-copied Array instance from an object.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


// intresting method  of an array

const new_array = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]

const new_array1 = new_array.flat(4)

console.log(new_array1);
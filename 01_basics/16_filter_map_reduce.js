// filter method will return a shallow copy or a peice of code(portion) from a given array


const num = [1, 2, 3, 4, 5]

const mynum = num.filter( (n) => n > 2)
// console.log(mynum);

const book = [
    {
        bokkName: "book one", genre: "History", publish: 1996
    },
    {
        bokkName: "book two", genre: "History", publish: 2001
    },
    {
        bokkName: "book three", genre: "Science", publish: 2003
    },
    {
        bokkName: "book four", genre: "fiction", publish: 2011
    },
    {
        bokkName: "book five", genre: "Non-fiction", publish: 2000
    },
]

const mybooks = book.filter( (bk) => { return bk.publish >= 2000 && bk.genre === "History"})
// console.log(mybooks);

// map method will create a new array populated with the results of calling a provided 
// function on every element in the calling array.


const numbers = [1, 2, 3, 4, 5]

const newNums = numbers.map( (num) => {
    return num * 2
})
console.log(newNums);

const multinums = numbers.filter( (num) => num >= 2)
                        .map( (num) => num * 3)

                        console.log(multinums);


 
                        
 // reduce method will accept two parameters acc. and currval acc iss empty variable which will take 
 // initial value and currval will take value from array
 
 
 const number = [1, 2, 3, 4, 5]

 const mynumber = number.reduce( (acc, currval) => { 
    console.log(`acc ${acc} + currentValue ${currval}`);
    return acc + currval}, 0)  

 console.log(mynumber);
const array = [1, 2, 3, 4, 9, 5, 6, 4, 5, 2, 3]
console.log(array[7] === -1);
// const uniqueArray = Array.from(new Set(array))
// console.log(uniqueArray);

// Something hasn't been initialized: undefined.

// Something is currently unavailable: null.

// function uniqueArray(arr) {
//     return [...new Set(arr)]
// }

// console.log(uniqueArray(array));

function uniqueArr(array) {
    const uniqueArray = []

    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i])
        }

    }

    return uniqueArray
}
console.log(uniqueArr(array));
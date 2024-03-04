let arr = [1, 5, 10, 6, 15]



const minNum = Math.min(...arr)
const maxNum = Math.max(...arr)

// function minMaxSum(arr) {
//     return minNum + maxNum
// }

// console.log(minMaxSum(arr));

function findMinMax(arr) {
    let smallNum = Number.POSITIVE_INFINITY

    for (const num of arr) {
        if (num < smallNum) {
            smallNum = num
        }

    }
    return smallNum
}

const number = findMinMax(arr);

console.log(number);
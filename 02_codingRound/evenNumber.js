
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

function evenNum() {
    return arr.filter((num) => num % 2 === 0)
}

console.log(evenNum(arr));
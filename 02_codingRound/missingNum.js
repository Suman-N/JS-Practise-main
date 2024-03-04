const missingNum = (arr) => {

    const n = arr.length + 1
    // console.log(n);
    const sum = n * (n + 1) / 2
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0)

    return sum - arrSum
}
console.log(missingNum([1, 2, 4, 5, 6]));
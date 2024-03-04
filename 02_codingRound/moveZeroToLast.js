let arr = [0, 2, 0, 3, 4]

function moveZeroToLast(arr) {

    const nonZeroCount = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroCount++] = arr[i]
        }

    }

    while (nonZeroCount < arr.length) {
        arr[nonZeroCount++] = 0
    }

    return arr

}
console.log(moveZeroToLast(arr));
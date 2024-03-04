
var arr = [1, 2, 3, 4, 5]
function modifyArray(arr, callback) {
    arr.push(100)
    callback()
}

function callback() {
    console.log("Arraay is Modified", arr);
}
modifyArray(arr, callback)
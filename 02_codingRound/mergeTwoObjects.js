var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };

const mergedObject = Object.assign({}, obj1, obj2)

console.log(mergedObject);
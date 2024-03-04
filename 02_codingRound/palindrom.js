// const isPaindrom = (str) => {
//     const reverse = str.split('').reverse().join('')

//     return str === reverse
// }

// console.log(isPaindrom('level'));



const makePalindrom = (str) => {
    const reversedString = str.split('').reverse().join('')
    // console.log(reversedString);

    for (let i = 0; i < str.length; i++) {
        if (str.substr(0, str.length - 1) === reversedString.substr(i)) {
            return reversedString.substr(0, i) + str
        }
    }

    return str

}

console.log(makePalindrom("hello"));


let string = "Hello World! How are you?"

function reverseWord(string) {
    // let reverseString = string.split('').reverse().join(''); // reverse the whole string

    // let splitString = string.split('') // split the words

    let words = string.split(' ') // split sentences

    // console.log(reverseString);
    // console.log(splitString);
    // console.log(words);

    let reverseWords = words.map((word) => word.split('').reverse().join(''))
    // console.log(reverseWords);

    let reverseSentence = reverseWords.join(' ')

    return reverseSentence;
}

console.log(reverseWord(string));

//Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.

//Method 1

function reverseString(str) {
    let newReversedStr = ''
    let i, styLenght;
    strLength = str.length - 1;
    for( i = strLength; i >= 0; i-=1){
        newReversedStr += str[i]
    }
    return newReversedStr;
}
console.log(reverseString("hello"));

//Method 2

function reverseString(str) {
    var b = str.split('').reverse().join('');
    return b;
}
console.log(reverseString("hello"));

//Method 3

function reverseString(str) {
    var arr = [];
    var i,lengthSize;
    lengthSize = str.length - 1;
    for( i = lengthSize; i >= 0; i-=1){
        arr.push(str[i]);
    }
    str = arr.join('');
    return str;
}
console.log(reverseString("hello"));
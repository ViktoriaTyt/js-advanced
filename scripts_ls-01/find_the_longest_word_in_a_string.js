//Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

//Method 1

function findLongestWordLength(str) {
    var splitStr = str.split(' ');
    var maxSize,
        maxSizeArr = [];
    splitStr.reduce(function(furstVal, currentVal, index) {
        maxSizeArr.push(splitStr[index].length)
        maxSize = Math.max(...maxSizeArr);
    });
    return maxSize;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
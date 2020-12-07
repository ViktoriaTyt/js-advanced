//Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

//Method 1

function findLongestWordLength(str) {
    var splitStr = str.split(' ');
    var maxSize,
        maxSizeArr = [];
    splitStr.forEach(function(item) {
        maxSizeArr.push(item.length)
        maxSize = Math.max(...maxSizeArr);
    });
    return maxSize;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
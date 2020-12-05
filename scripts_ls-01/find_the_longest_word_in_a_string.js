//Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

//Method 1

function findLongestWordLength(str) {
    var splitStr = str.split(' ');
    var i,maxSize;
    var maxSizeArr = [];
    for( i = 1; i < splitStr.length; i+=1){
        var sizeWord = splitStr[i].length;
        maxSizeArr.push(sizeWord)
        maxSize = Math.max(...maxSizeArr);
    }
    console.log(splitStr)
    return maxSize;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Method 2

function findLongestWordLength(str) {
    var splitStr = str.split(' ');
    var i,lastMaxElem;
    var maxSize = [];
    for( i = 1; i < splitStr.length; i+=1){
        var sizeWord = splitStr[i].length;
        maxSize.push(sizeWord);
        maxSize.sort();
        lastMaxElem = maxSize[maxSize.length-1];
    }
    return lastMaxElem;
}

//console.log(findLongestWordLength("May the force be with you"))
//console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//Return an array consisting of the largest number
// from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop,
// and access each member with array syntax arr[i].

//Method 1

function largestOfFour(arr) {
    var newArr = [];
    var maxSize;
    arr.forEach(function(i){
        maxSize = Math.max(...i);
         newArr.push(maxSize)
    })
    return newArr;
}
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Method 2

function largestOfFour(arr) {
    var newArr = [];
    var maxSize, i,
        sizeArr = arr.length;
    for ( i = 0; i < sizeArr; i+=1){
        var a = arr[i];
        maxSize = Math.max(...a);
        newArr.push(maxSize)
    }
    return newArr;
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
//Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    var newArr = [], indexArr;
    newArr = arr.concat(num);
    newArr.sort( function (max, min) {
        return max - min;
    });
    for(var i = 0; i < newArr.length; i+=1){
        if (newArr[i] === num) {
            indexArr = i;
            break;
        }
    }
    return indexArr;
}
getIndexToIns([200, 40, 60], 40);

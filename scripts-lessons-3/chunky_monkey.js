//Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    var newArr = [], i;
    var n = 0;
    var wew = size;
    for(i = 0; i < ((arr.length)/size); i+=1){
        newArr.push(arr.slice(n, wew));
        n += size;
        wew += size;
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
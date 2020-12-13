//Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array
// arr and returns the first element in it that passes
// a 'truth test'. This means that given an element x,
// the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
    var i,
        funNumber = 0;
    for (i = 0; i < arr.length; i+=1) {
        funNumber = arr[i];
        if(func(funNumber)){
            //console.log(num)
            return funNumber
        }
    }

}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

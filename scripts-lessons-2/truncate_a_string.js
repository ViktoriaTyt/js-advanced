//Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array arr and returns the first
// element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test'
// is passed if func(x) is true. If no element passes the test, return undefined.

function truncateString(str, num) {
    var a = str.slice(0, num);
    var b = a + "..."
    if(str.length <= num){
        return a;
    }
    return b;
}

truncateString("Absolutely Longer", 2);
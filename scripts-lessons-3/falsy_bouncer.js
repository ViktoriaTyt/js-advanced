//Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

function bouncer(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        var boolenItem = Boolean(item);
        if(boolenItem){
            newArr.push(item)
        }
    });
    return newArr;
}

bouncer([7, "ate", "", false, 9]);
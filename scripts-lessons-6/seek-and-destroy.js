//Seek and Destroy


//You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    const args = Array.from(arguments);
    const argsArr = args[0];
    let i, lastArgs = [], size = args.length, j;

    for( i = 1; i < size; i+=1 ){
        lastArgs.push(args[i]);
    }
    var value = argsArr.filter(function (number) {
        return !lastArgs.includes(number)
    })
    return value

}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);
function validParens(s) {
    var symbols = '()[]{}', size = s.length, i, arr = [];

    for(i = 0; i < size; i += 1) {
        if(s[i] === '('){
            arr.push('()')
        }
        else if(s[i] === '['){
            arr.push('[]')
        }
        else if(s[i] === '{'){
            arr.push('{}')
        }
        if(arr.join('') === s){
            return true
        }
    }
    return false;
}

console.log(validParens('{}()[]')); // true
console.log(validParens('(]')); // false
console.log(validParens('([)]')); // false
console.log(validParens('{[]}')); // false
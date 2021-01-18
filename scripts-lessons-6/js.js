function validParens(s) {
    var symbols = '()[]{}', size = s.length, i, position, arr = [];

    for(i = 0; i < size; i += 1) {
        position = symbols.indexOf(s[i]);
        console.log(position)

        if(position === -1) continue;

        // ...
    }
}

//console.log(validParens('()[]{}')); // true
//console.log(validParens('(]')); // false
//console.log(validParens('([)]')); // false
//console.log(validParens('{[]}')); // false
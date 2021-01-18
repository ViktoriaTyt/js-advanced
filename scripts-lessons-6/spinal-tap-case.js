//Spinal Tap Case

//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    let regExpr = /\s|_|(?=[A-Z])/;
    let result = str.split(regExpr).join('-').toLowerCase();

   return result
}
spinalCase("thisIs SpinalTap");
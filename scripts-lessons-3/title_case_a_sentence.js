//Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize
// connecting words like "the" and "of".


function titleCase(str) {
    var words = str.split(' ');
    var newStr = [];
    words.forEach( function (item) {
        var a = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        newStr.push(a);
    });
    var returnToStr = newStr.join(' ');
    return returnToStr;
}
titleCase("I'm a little tea pot");
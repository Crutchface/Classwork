// write a code snippet that prompts the user for a word, trims the whitespace from the phrase, 
// captializes the first character, trims any whitespace and 
// makes all other characters lower case
// displays the length of the word

var inputWord = prompt("Enter any word ");
// remove whitespaces
inputWord = inputWord.trim();
// access first character
console.log(inputWord.substring(0,1));
// gets first character
var firstCharacter = inputWord.substring(0,1);
//capitalizes first character
var firstCharCap = firstCharacter.toUpperCase();
// to lower case rest of word (-1 accounts for zero index of first character)
//var remainingChars = inputWord.substring(1,inputWord.length);
// with substrings() if only 1 parameter is passed, 
//it creates a substring from that index to the end of the string
var remainingChars = inputWord.substring(1);
var remainingCharsLower = remainingChars.toLowerCase();
// merge 2 strings
console.log(firstCharCap + remainingCharsLower);

// same as all above code
console.log(inputWord.trim().substring(0,1).toUpperCase() +
             inputWord.trim().substring(1).toLowerCase());

// Question 1:  Write a function findMax that takes an array of numbers and returns the largest number
// in the array.

// let sampleDigits = [45, 5, 17, 588, 19]
// let findMax = sampleDigits.reduce((highest,currentValue)=>{
//     return currentValue > highest ? currentValue : highest;
// });
// console.log(findMax)

// Question 2:Write a function avgArray that takes an array of numbers as an argument and returns the
// average of all the numbers in the array.

// let sampleDigits =  [4,5,6,7];

// let avgArray = sampleDigits.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }) / sampleDigits.length;

// console.log(avgArray);


// Question 3 : Write a function filterEvenNumbers that takes an array of numbers and returns an array
// containing only the even numbers

// let sampleDigits = [2,3,4,6,7];

//  let filterEvenNumbers = sampleDigits.filter(num => num %2 === 0);
// console.log(filterEvenNumbers)

//question 4 :Write a function getLengths that takes an array of strings and returns an array of the
// lengths of those strings

// let sampleWords = ["green", "bean", "casserole"];

// let getLengths = sampleWords.map(word=> word.length)
// console.log(getLengths)

// question 5 :Write a function sumOddNumbers that takes an array of numbers and returns the sum of
// all the odd numbers in the array

// let sampleDigits=[1,2,3,37,44,66];

// let sumOddNumbers = sampleDigits.reduce((accumulator , currentValue)=>{
//     return currentValue %2 !==0 ? currentValue + accumulator : accumulator;
// });
// console.log(sumOddNumbers)

//QUESTION 6 : Write a function findSecondMax that takes an array of numbers and returns the second
// largest number. Assume the array contains at least two distinct numbers

// let sampleDigits=[1,2,3,37,44,66];


// var sorted = sampleDigits.toSorted();
// console.log(sampleDigits[sampleDigits.length-1])

// let sampleDigits=[1,2,3,37,44,66];

// function getSecondLargest(number) {
//   var largest =0;
//   var secondlargest =0;
//   for (let i = 1; i < number.length; ++i) {
//     if (number[i] > largest) {
//         secondlargest = largest;
//         largest = number[i];
//     } else if (number[i] > secondlargest) {
//         secondlargest = number[i]
//     }
//   }
//   return secondlargest;
// }

// console.log(getSecondLargest(sampleDigits));

// question 7. Write a function capitalizeWords that takes an array of strings and returns a new array
//with each string capitalized (first letter capitalized and the rest lowercase)

// let sampleWords = ["green", "bean", "casserole"];


// let capitalizeWords = sampleWords.map(word =>{
//     return word[0].toUpperCase() + word.substring(1);
// })
// console.log(capitalizeWords);

// question 8: Write a function sortByLength that takes an array of strings and returns a new array
// where the strings are sorted by their lengths, from shortest to longest.
// function sortByLength(array){
//     return array.sort((a,b)=> a.length - b.length);
// }
    

// let sampleWords = ["green", "bean", "casserole"];
// console.log(sortByLength(sampleWords));

// question 9 : Write a function findLongestWord that takes an array of strings and returns the longest
// word. If there are multiple words with the same length, return the first one.

// let sampleWords = ["green", "bean", "casserole"];

// let findLongestWord = sampleWords.reduce((word, currentValue)=>{
//     return word.length < currentValue.length ? currentValue : word;
// })
// console.log(findLongestWord);

// question 10 : Write a function findMostFrequent that takes an array and returns the element that
// appears most frequently. If there is a tie, return any one of the most frequent elements.

let sampleWords = ["green", "bean", "casserole", "green", "bean","bean"];
var occurence = 0;
var mostFreq= 1;
var word = 0;

function findMostFrequent(array){
    var mostFreq =0;
    for ( i = 0; i < array.length; i++) {
        for ( j = i; j < array.length; j++){
            if (array[i] == array[j])
                occurence++;
            if (mostFreq < occurence){
                mostFreq = occurence;
                word=array[i];
            }
        } 
        occurence  = 0;
    }
    return word;
}
var result = findMostFrequent(sampleWords);
console.log(word);

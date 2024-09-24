// arrays 
// storage of a collection of items

const numbers1 = [10,20,30,40,50];
console.log(numbers1);

// accessing elements of an array
console.log(numbers[1]);

numbers1[2] = 90;
console.log(numbers1);

// referencing the array uses pointers 

let arr = [1,2];
numbers1=arr;
console.log(number1);
number1[1]=20;
console.log(arr);

// methods of arrays 
// add an element to end of array

numbers1.push(60);
console.log(numbers1);

// removing an element from the end of an array

numbers1.pop();
console.log(numbers1);

//unshift adds an element to the beginning of the array
numbers1.unshift(5);
console.log(numbers1)

//shift removes an element to the beginning of the array
numbers1.shift();
console.log(numbers1);

// itterating through arrays using a for loop
for(let i=0; i<numbers1.length; i++){
    console.log(numbers1[i]);
}

// using a for-of loop
// executes for every element in the array
for(let num of numbers1){
    console.log(num/10);
    
}

// for each loops parameter should be function for each element
// foreach (function) <--- takes function as parameter and executed for every element in the array
numbers1.forEach((num)=> console.log(num*2))


// array concatenation jams arrays together
let numbers2 = [1000,2000,3000,4000];
let concatArr = numbers1.concat(numbers2);
console.log(concatArr);

//slicing up an array (similar to substring with substring values)
let slicedArray= concatArr.slice(0,2);
console.log(slicedArray);

// array destructuring can use any variable you want (Generates new value and doesnt affect array. )
// destructured variables are by value not by reference 

let [num1, num2] = numbers2;
console.log(num1,num2);

// array spreading operator (... is spread array and deconstructs entire array) this is a DEEP copy
console.log(numbers2);
let spreadArray = [...numbers2];
console.log(spreadArray);
spreadArray[0]=999;
console.log(spreadArray);
console.log(numbers2);

// map , filter, reduce

//

let digits= [2,4,5,10]
let doubleDigits= [];
for(let i=0; i< digits.length; i++){
    doubleDigits.push(digits[i]*2);
    
}
console.log(doubleDigits);


// using foreach MAP creates and uses a new array (Map to basically)
// TAKES A FUNCTION AS A PARAMETER, EXECUTES, CREATES A NEW ARRAY BY EXECUTING EACH ELEMENT IN THE ARRAY using said function

function double(x){
    return x*2;

}
// digits.forEach(function(x)){
//     doubleDigits1.push(x*2);
// }

let doubled = digits.map(num=>num*2);
console.log(doubled)
// using an extra function
    
let doubled2 = digits.map(double);
console.log(doubled2);
console.log(digits);


// filter does something similar 
// creates a new array that meets the conditions of the filter

let lownumbers = digits.filter(function(num){
    return num<5;
})
console.log(lownumbers);

// getting odd numbers from digits

let oddnumbers = digits.filter(num => num%2 === 1);
console.log(oddnumbers);


// reduce 
// this acts as an accumulator of a value by executing a function on each element of the array
// sum of all elements within the array
console.log(digits)
let sumArray = digits.reduce(function(accumulator, currentValue){
    console.log(accumulator);
    return accumulator + currentValue;
})
console.log(sumArray);

// find the max number in an array
var maxNum = digits.reduce((accumulator, currentvalue)=>{
    
    return currentvalue> accumulator ? currentvalue : accumulator;
    
});
console.log(maxNum)

// ? is ternary value
  // <condition> ? true : false
// let y = 10 > 4 ? "low" : "high"
// //SAME THING HERE
// if 10>4{
//     y="low"
// }
// else {
//     y="high"
// }
// console.log(y)
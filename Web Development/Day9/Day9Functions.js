// creating a basic function
//declaring a function w/ no parameters
function greet(){
    console.log("welcome to oosd");
}

// call teh fucntion
greet();

// pass a parameter to greet

function greetings(name){
    console.log(`${name}! Welcome to the new thing`);
}
greetings("Fred");
greetings("ted");

//  using function expression
// function has no name
// name of variable is name of function

var greetExpression = function(name){
    console.log(`${name} find the treasures`)  // FUNCTION expression
}

greetExpression("carlos");


function addition(a,b){
    var result=a + b;
    return result;
}
var res= addition(23,10);

console.log(addition(23,10));
console.log(addition(10,10));

// default values

function multiply(a,b,c=1){
    var result = a * b * c;
    return result;
}

console.log(multiply(2,3));
console.log(multiply(2,3,10));

// arrow functions
// shorter ways for programming

// function division(a,b){
//     var div= a / b;
//     return div;
// }

// // convert to a function expression

// var division = function(a,b){
//     var div = a / b;
//     return div;
// }

// convert to arrow function

// var division = (a,b) => { // same as fuynction expression like an arrow instead of function prior
//     var div = a / b;
//     return div;
// }

// console.log(division(10,2));

// taking it further for single line declarations (ONE LINE ONLY)
// var division = (a,b) => return a/b;

// single parameter  single line functions 
// subtract 1 from a number

// var subtractOne=a=>a-1
// console.log(subtractOne(20));

// // Functions without parameters 

// var greeting =() => console.log("Welcome to class")

// greeting();


// difference between (var let) and const (Three major data types) SLIDE 22
// var is a global scope element
// let is block-scoped
let y = 10;
if(true){
    let y = 20;
    console.log("y in f" + y);
}

console.log(y);

// var allows for variable re-declaration
var n=200;
var n=99;
// LET DOES NOT ALLOW RE-DECLARATION
// let m=200
// let m=99

// var allows for hoisting

console.log(newVar)
var newVar = 200;


// let does not allow for hoisting
// console.log(newLet);
// let newLet = 200;

// const is constant and cannot be changed

const c=200;
c=2
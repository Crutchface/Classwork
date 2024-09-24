let student = {
    name: "Fred",
    email: "fred@cool.com",
    gender: "Male",
    address : "1 House St",
};
// name : is a key
// fred : is a value
//key-value pairs

console.log(student);
let student2 = {
    name: "Gred",
    email: "gred@cool.com",
    gender: "Female",
    address : "1 Ledger St",
    display: function(){
        console.log("My Names is " + this.name);
    }
};

console.log(student2.name);

// Alternate way 

console.log(student2["name"])

// access function
console.log(student2.display());

// ATTN: this doesnt work with arrow functions. Can boil keys to functions with ()

let student3 = {
    name: "Pete",
    email: "pete@cool.com",
    gender: "Female",
    address : "1 poo St",
    display(){
        console.log("My Names is " + this.name);
    }
    
};

console.log(student3.display());

let student4 = {
    name: "Jerry",
    email: "pete@cool.com",
    gender: "Female",
    address : "1 poo St",
    display(){
        console.log("My Names is " + this.name);
    }
    
};

// Tip : Storing objects as constant will not allow full copies. 
// Specifying information within the object to change WILL allow a change;
//The properties within objects are NOT constant.

// student2.name = "Jerry";
// student3.name = student2.name

// NESTED objects
//

let student5 = {
    name: "Pete",
    email: "pete@cool.com",
    gender: "Female",
    address : "1 poo St",
    display(){
        console.log("My Names is " + this.name);
    },
    courses: ["Web Development", "Project Tools","Database"],
    grades: {
        webdev: "70",
        proje: "78",
    }
    
};
console.log(student5.grades.webdev);

// destructuring objests

let courses = ["web Dev", "Proj", "Data"];
let [webCourse] = courses;

console.log(webCourse)
// Variable must have the same name as the property in the object
let {name,grades} = student5;
console.log(grades);

// renaming in destructuring 
let{grades:myGrade} = student5;
console.log(myGrade);


// destructuring nested objects :

let {address:myAddress, grades:{webdev, Database}} = student5;

console.log(myAddress, webdev);

// JAVASCRIPT object

let erica = {
    name: "Erica",
    email: "pete@cool.com",
    gender: "Female",
    address : "1 poo St",
    display(){
        console.log("My Names is " + this.name);
    }
    
};

// JSON (JavaScript Object Notation) - used to store and transfer data from one to another location

// {
//     "name":"Erica",
//     "email":"erica@hotmail.com",
//     "gender":"Female",
//     "address":"address",
        // does not contain functions
// }

// JSON Converssion :
// use json.stringify to convert js objects to json

let ericaJSON = JSON.stringify(erica);
console.log(ericaJSON);
// Converting JSON to object
// use single quotes outside if its double inside or vce versa
let ericaParsedJSON = JSON.parse('{"name":"Erica","email":"pete@cool.com","gender":"Female","address":"1 poo St"}')
// OR
let ericaParsedJSON2 = JSON.parse(ericaJSON);

console.log(ericaParsedJSON2, ericaParsedJSON);


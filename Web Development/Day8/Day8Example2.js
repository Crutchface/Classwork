// // Create a simple Body Mass Index calculator

// var weight = prompt("Enter your weight in KG's :");
// var height = prompt("Enter your height in meters :");
// var bmi = weight/(Math.pow(height,2));
// console.log("Your body mass index is " + Math.round(bmi));

// // Math class for equations Math.po Math.round etc

// // using conditionals
// if(bmi < 18.5){
//     // runs if condition is true
//     console.log("Underweight, please see your doctor");
// }
// // else if continues the checking instead of starting a new one
// else if(bmi > 25){
//     // nested if condition
//     if (bmi>30){
//         console.log("OBESE, PLEASE exercise");
//     }
//     else {
//         console.log("Overweight, exercise");
//     }
// }
// else{
//     console.log("Youre Good");
// }

// //
// //OR
// //
// // combining multiple conditions
// if(bmi < 18 || bmi >= 40 ){
//     // runs if either condition is true
//     console.log("Visit your DR Immediately");
// }
// // else if continues the checking instead of starting a new one
//     // checks if both are true
// else if(bmi > 25 && bmi <= 30){
//     console.log("Overweight, exercise");
    
// else if (bmi>30 && bmi <40 ){
//         console.log("OBESE, PLEASE exercise");
//     }
// }
// else{
//     console.log("Youre Good");
// }

// // using switch case and uses === so must be same case

// switch(parseInt(prompt("Insert your BMI")))
// {
//     case 25:
//         console.log("You are Healthy");
//         // gets out of conditional
//         break;
//     case 30:
//         console.log("You are obese");
//         break;
//     case 18:
//         console.log("you are Underweight");
//         break;
//     default:
//         console.log("Youre good");
// }
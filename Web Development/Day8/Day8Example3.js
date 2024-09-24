// // loops 
// // for loops 
// // for(<initialization>, <condition>; <change>);

// // print all numbers from 1-10 and multiply each by 2

// for(var n=1; n<=10; n++){
//     var answer = n *2;
//     console.log(`The input is ${n} and it multiplied by 2 is ${answer}`);
// }
// console.log("using while loop")
// var n1 =0;
// while(n1<=20){
//     var answer= n1 *5;
//     console.log(`The input ${n1} multiplied by 2 is ${answer} `)
//     n1++;
// }


// // // run continuously until a condition breaks it
// // while(true){
// //     var userInput = prompt("enter a number to multiply by 10");
// //     var userOutput= userInput *10;
// //     console.log("The answer is " + userOutput);
// //     // confirm returns true if ok is selected
// //     // confirm returns false if cancel is selected
// //     if (!confirm("Do you want to continue with another number")){
// //         break;
// //     }
// // }

// for(var n=1; n<=10; n++){
//     var answer = n *2;
//     console.log(`The input is ${n} and it multiplied by 2 is ${answer}`);
// }
// console.log("using while loop")
// var n1 =0;
// while(n1<=5){
//     var answer= n1 *5;

//     for(var n2=0 ; n2<3; n2++){
//         console.log(`multiplication of ${n1} * ${n2} is ${n1*n2}`);
//         if(n1>2){
//             //breaks immediate loop
//             break
//         }
        
//     }
//     console.log(`The input ${n1} multiplied by 2 is ${answer} `)
//     n1++;
// }


// for(var n=1; n<=10; n++){
//     var answer = n *2;
//     console.log(`The input is ${n} and it multiplied by 2 is ${answer}`);
// }
// console.log("using while loop with continue")
// var n1 =0;
// while(n1<=5){
//     var answer= n1 *5;

//     for(var n2=0 ; n2<3; n2++){
//         console.log(`multiplication of ${n1} * ${n2} is ${n1*n2}`);
//         if(n==2){
//             //continues to next 
//             continue
//         }
        
//     }
//     console.log(`The input ${n1} multiplied by 2 is ${answer} `)
//     n1++;
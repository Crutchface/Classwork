var sinNumber = prompt("Insert your sin number you fucking idiot:");

if (sinNumber.length < 9 || sinNumber.length > 9){
    console.log("Please enter a valid length") ;
}
// step 1
var step1= (+sinNumber.substr(1,1)) + +parseInt(sinNumber.substr(1,1));

// Step 2 FOR 2ND
var step2a = (+sinNumber.substr(2,1)) *2;

if (step2a.toString().length == 1){
    var tally1 = parseInt(step2a);
}
else {
    var step2astring = step2a.toString();
    var digit1 = parseInt(step2astring.charAt(0));
    var digit2 = parseInt(step2astring.charAt(1));
    var tally1 = digit1 + digit2;
    
}

// step 3 for 4th

var step3a = (+sinNumber.substr(4,1)) *2;

if (step3a.toString().length == 1){
    var tally2 = parseInt(step3a);
}
else {
    var step3astring = step3a.toString();
    var digit3 = parseInt(step3astring.charAt(0));
    var digit4 = parseInt(step3astring.charAt(1));
    var tally2 = digit3 + digit4;
    
}

// step 3 for 6th

var step3a2 = (+sinNumber.substr(6,1)) *2;

if (step3a2.toString().length == 1){
    var tally3 = parseInt(step3a2);
}
else {
    var step3bstring = step3a2.toString();
    var digit5 = parseInt(step3bstring.charAt(0));
    var digit6 = parseInt(step3bstring.charAt(1));
    var tally3 = digit5 + digit6;
    
}

// step 3 for 8th

var step3a3 = (+sinNumber.substr(8,1)) *2;


if (step3a3.toString().length == 1){
    var tally4 = parseInt(step3a3);
}
else {
    var step3cstring = step3a3.toString();
    var digit7 = parseInt(step3cstring.charAt(0));
    var digit8 = parseInt(step3cstring.charAt(1));
    var tally4 = digit7 + digit8;
    
}
// step 4
var step4sum = tally1 + tally2 + tally3 + tally4;

// step 5

var step5sum= step4sum + step1;

console.log(step5sum);
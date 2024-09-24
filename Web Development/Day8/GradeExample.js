while(true){
    var grade = prompt("enter a number");
    if (grade >= 0 && grade <= 100){
        break;
    }
}

if (grade >= 80 && grade <= 100){
    console.log("You Got an A!")
}
else if (grade >= 70 && grade <= 79){
    console.log("You Got a B!")
}
else if (grade >= 60 && grade <= 69){
    console.log("You Got a C!")
}
else if (grade >= 50 && grade <= 59){
    console.log("You Got a D!")
}
else {
    console.log("You got an F!!")
}
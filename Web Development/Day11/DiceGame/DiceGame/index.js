// Random Number
let player1 = Math.ceil(Math.random()*6);

let player2= Math.ceil(Math.random()*6);

// Make random dice Image since you cant modify as tring via set arttribute 
let randomDiceImage1 = "images/dice"+ player1+".png"
let randomDiceImage2 = "images/dice"+ player2+".png"

// Replace Image
document.querySelector(".img1").setAttribute("src" , `${randomDiceImage1}`);

document.querySelector(".img2").setAttribute("src" , `${randomDiceImage2}`);

// Check Winner and display
if (player1>player2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";

}
else if (player1<player2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";

}
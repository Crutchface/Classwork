let counter=0;
document.querySelector(".btn").addEventListener('click', handleClick); // no parenthesis for handleclick() since that will call it immediately on page load. (it calls the function)
// ALTERNATE
// document.querySelector(".btn").addEventListener('click', function(){
//     counter++;
//     document.querySelector("h1").innerHTML = counter;
// }); // no parenthesis for handleclick() since that will call it immediately on page load. (it calls the function)

function handleClick(){
    counter++;
    document.querySelector("h1").innerHTML = counter;
}

// mouse over 
let hover = document.querySelector("#hover");

hover.addEventListener('mouseover', function(){
    hover.style.backgroundColor = 'green';
});
hover.addEventListener('mouseout', function(){
    hover.style.backgroundColor = 'brown';
});

// keydown : triggers with each press
document.querySelector("#input-text").addEventListener('keydown', function(){
    // console.log(this);
    console.log(event.key);
});

// focus

document.querySelector("#input-text").addEventListener('focus', function(){
    // console.log(this);
    document.querySelector("#input-text").style.backgroundColor ="red";
    console.log(event.key);
});
document.querySelector("#input-text").addEventListener('blur', function(){
    // console.log(this);
    document.querySelector("#input-text").style.backgroundColor ='';
    console.log(event.key);
});
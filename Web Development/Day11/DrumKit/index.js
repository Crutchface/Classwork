
for (let i=0; i< document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener('click' , function(){
//  let sound = new Audio("./sounds/tom-1.mp3");
//  sound.play();
 console.log(this.innerHTML);
 playSound(this.innerHTML);
//  makeAnimation(this.innerHTML)
})
}
// create a similar sound for key press

// Event passes info into .key gives value of pressed key, AND PASSES TO PLAYSOUND
document.addEventListener('keypress', function(event){
    console.log(event.key);
    playSound(event.key);
    // makeAnimation(event.key);
} );


document.querySelector(".melody").addEventListener("click", function(){
    let arr=['l','k','j','k','l','k','j','k','l','k','j','k','l','k','j','k']
    for(let i=0; i<arr.length;i++){

        setTimeout(function() {playSound((arr[i]))},i*200);
        // setTimeout(function() {makeAnimation((arr[i]))},i*200);
    }
});
// change class to represent a pressed button
function makeAnimation(sound){
    let activeKey = document.querySelector("."+sound);
    activeKey.classList.add("pressed");
    setTimeout(function(){activeKey.classList.remove("pressed")},1000);
};

function playSound(sound){
    let audio;
    // check the key being pressed to determine which drum should be played
    makeAnimation(sound)
    switch(sound){
        case'w': 
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}
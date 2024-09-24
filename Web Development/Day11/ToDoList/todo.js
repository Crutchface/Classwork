
document.querySelector(".submit").addEventListener('click', function(){
    const adding = document.getElementById("todoAddItem").value;
    document.getElementById("todoAddItem").value='';
    if(adding !==''){
        const lineitemNew = document.createElement("li");
        lineitemNew.textContent = adding;
        
        document.getElementById("myList").appendChild(lineitemNew).className=("item");
    
        lineitemNew.addEventListener('click' , function(){
            lineitemNew.style.textDecoration= "line-through";
            // console.log(this.innerHTML);
            // console.log(this.className);
        });
        }
    
    }); 

    
 
    

       
    // for (let i=0; document.querySelectorAll(".item").length;i++){

    //     document.getElementsByClassName('item')[i].addEventListener('click' , function(){
    //     console.log(this.innerHTML);
    //     console.log(this.className);
    //     this.style.textDecoration= "line-through";
    //     //  document.querySelector(".item1")[i].style.textDecoration = "line-through"  ;
    //     })
    //     }

    // YOU CAN JUST ASSIGN THE LISTENER AT THE END OF THE ADDITION OF THE NEW ITEM
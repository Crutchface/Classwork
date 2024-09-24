let username = document.querySelector("#username");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let pattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // email regex

function validateForm(){
    // Variable used to store all error messages
    let errorMessage ='';
    // isValid= false;
    if (username.value ==''){
        errorMessage+= "Username cant be Empty. ";
        
    }
    if (!pattern.test(email.value)){
       
        errorMessage+="Email cant be Empty. "
    }
    if (age.value <10 || age.value > 90){
        
        errorMessage+="Age must be between 10 & 90"
    }
// if string is still blank
    if (errorMessage == ''){
        var agree = confirm("Test")
        if (agree){
            return true;
        }
        else{
            return false;
        }
    }
    // if string has content
    else {alert(errorMessage);
        return false;

    };
}
// };
// document.querySelector("#input-text").addEventListener('focus', function(){
//     // console.log(this);
//     document.querySelector("#input-text").style.backgroundColor ="red";
//     console.log(event.key);
// })


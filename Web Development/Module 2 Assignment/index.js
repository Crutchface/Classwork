// Takes all the information from the filled in forms and passes it to the JS via DOM

let lastname = document.querySelector("#lastname");
let firstname = document.querySelector("#firstname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let dob = document.querySelector("#dob");
let streetaddress = document.querySelector("#streetaddress");
let city = document.querySelector("#city");
let postal = document.querySelector("#postal");
let guests = document.querySelector("#guests");
let mobile = document.querySelector("#mobile");

// declare regex valuse for those validated with it
const emailregex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const postalregex= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const phoneregex = /^\d{9}$/;
const nameregex= /^[a-zA-Z\-]+$/;
const dobregex=  /[\w\d]+/;
const addressregex= /[\w\d]+/;
const usernameregex= /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
const guestregex= /([1-9]|1\d|20)/




// validates that the forms contain data and only passes to submit if the values contain no blank fields
function validateForm(){
    // Stores a blank variable that messages are appended to throughout validation
    let errorMessage ='';
    
    
    const lastnametext= lastname.value;
    const firstnametext = firstname.value;
    const usernametext = username.value;
    const dateofbirth = dob.value;
    const address1 = streetaddress.value;
    const address2 = city.value;
    const postalcode= postal.value; 
    const guestnumber = guests.value;
    const emailaddress = email.value;
    const phonenumber= mobile.value;
    
    
    const lastnametest = nameregex.test(lastnametext);
    const firstnametest = nameregex.test(firstnametext);
    const usernametest = usernameregex.test(usernametext);
    const emailtest = emailregex.test(emailaddress);
    const dobtest = dobregex.test(dateofbirth);
    const address1test = addressregex.test(address1);
    const address2test = addressregex.test(address2);
    const postalcodetest = postalregex.test(postalcode);
    const guesttest = guestregex.test(guestnumber);
    const mobiletest = phoneregex.test(phonenumber);

    console.log(lastnametest);
    console.log(firstnametest);
    console.log(usernametest);
    console.log(emailtest);
    console.log(dobtest);
    console.log(address1test);
    console.log(address2test);
    console.log(postalcodetest);
    console.log(guesttest);
    console.log(mobiletest);


    
     if (lastnametest == false){
        errorMessage += "Last Name Required."
    }
    if (firstnametest == false){
        errorMessage += "Last Name Required."
    }
    if (usernametest == false){
        errorMessage += "Last Name Required."
    }
    if (emailtest ==false){
        errorMessage += "Email Required"
    }
    if (dobtest == false){
        errorMessage += "DOB Required"
    }
    if (address1test == false){
        errorMessage += "Street Address Required"
    }
    if (address2test == false){
        errorMessage += "City Required"
    }
    if (postalcodetest == false){
        errorMessage += "City Required"
    }
    if (guesttest == false){
        errorMessage += "Number of Guests Required"
    }
    if (mobiletest == false){
        errorMessage += "Phone Number Required"
    }

    // if (lastname.value ==''){
    //     errorMessage += "Last Name Required."
    // }
    // if (firstname.value ==''){
    //     errorMessage += "Last Name Required."
    // }
    // if (username.value ==''){
    //     errorMessage += "Last Name Required."
    // }
    // if (email.value ==''){
    //     errorMessage += "Email Required"
    // }
    // if (dob.value ==''){
    //     errorMessage += "DOB Required"
    // }
    // if (streetaddress.value == ''){
    //     errorMessage += "Street Address Required"
    // }
    // if (city.value == ''){
    //     errorMessage += "City Required"
    // }
    // if (postal.value == ''){
    //     errorMessage += "City Required"
    // }
    // if (guests.value == ''){
    //     errorMessage += "Number of Guests Required"
    // }
    // if (mobile.value == ''){
    //     errorMessage += "Phone Number Required"
    // }



    
    if (errorMessage == ''){
        var agree = confirm("Are you sure you would like to submit??");
        if (agree){
            return true 
        }
        else {
            return false
        }


    }
    else {alert(errorMessage);
        return false;

    }
}

function clearForm(){
    var sure = confirm("Are you sure you would like to CLEAR THE FORM?");
    if (agree){
        return true 
    }
    else {
        return false
    }
};


var inputFields = document.getElementsByTagName("input")

// iterate over each of the buttons we just grabbed
for(i=0;i < inputFields.length;i++){
    
    // buttons[i].id will give us the id of the button for the current loop iteration,
    // so we feed that into getElementById.
    // Then we add an event listener on each one, which will turn it red when you click it
    
    document.getElementById(inputFields[i].id).addEventListener("focus",function(){
    this.style.backgroundColor="red";
    var tipname = this.id +"tip";
    console.log(tipname);
    document.getElementById(tipname).style.visibility ="visible";
        
    
    });





    document.getElementById(inputFields[i].id).addEventListener("blur",function(){
        this.style.backgroundColor="";
        var tipname2 = this.id +"tip";
        console.log(tipname2);
        document.getElementById(tipname2).style.visibility ="hidden";


    });
    
    }
    
 



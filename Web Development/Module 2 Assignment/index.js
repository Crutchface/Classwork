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
// Im unsure of best practice regex for specific fields so some of these may be rudimentary.
const emailregex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const postalregex= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const phoneregex = /^\d{9}$/;
const nameregex= /^[a-zA-Z\-]+$/;
const dobregex=  /[\w\d]+/;
const addressregex= /[\w\d]+/;
const usernameregex= /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
const guestregex= /([1-9]|1\d|20)/




// validates that the forms contain data and only passes to submit if the values pass regex validation
function validateForm(){
    // Stores a blank variable that messages are appended to throughout validation
    let errorMessage ='';
    
    // Storing the values of the fields that have been input into variables
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
    
    // Testing those values agianst our declared regex values
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

// grabs all the input fields in the html document and store them in an array
var inputFields = document.getElementsByTagName("input")
// iterate over each of the buttons we just grabbed
for(i=0;i < inputFields.length;i++){
    
    // buttons[i].id will give us the id of the button for the current loop iteration,
    // so we feed that into getElementById.
    // Then we add an event listener on each one, which will turn on our tooltips with css
    
    document.getElementById(inputFields[i].id).addEventListener("focus",function(){
    var tipname = this.id +"tip";
    document.getElementById(tipname).style.visibility ="visible";
    });

    // does the same thing but for the blur function and hides the previously unhidden tip
    document.getElementById(inputFields[i].id).addEventListener("blur",function(){
        var tipname2 = this.id +"tip";
        document.getElementById(tipname2).style.visibility ="hidden";
    });
    
    }
    
 



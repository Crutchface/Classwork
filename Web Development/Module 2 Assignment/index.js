// Takes all the information from the filled in forms and passes it to the JS via DOM

let lastName = document.querySelector("#lastName");
let firstName = document.querySelector("#firstName");
let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let dob = document.querySelector("#dob");
let streetAddress = document.querySelector("#streetAddress");
let city = document.querySelector("#city");
let postal = document.querySelector("#postal");
let guests = document.querySelector("#guests");
let mobile = document.querySelector("#mobile");

// declare regex valuse for those validated with it
// Im unsure of best practice regex for specific fields so some of these may be rudimentary.
const emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const postalRegex= /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const phoneRegex = /^\d{9}$/;
const nameRegex= /^[a-zA-Z\-]+$/;
const dobRegex=  /[\w\d]+/;
const addressRegex= /[\w\d]+/;
const userNameRegex= /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;
const guestRegex= /([1-9]|1\d|20)/




// validates that the forms contain data and only passes to submit if the values pass regex validation
function validateForm(){
    // Stores a blank variable that messages are appended to throughout validation
    let errorMessage ='';
    
    // Storing the values of the fields that have been input into variables
    const lastNameText= lastName.value;
    const firstNametext = firstName.value;
    const userNametext = userName.value;
    const dateOfBirth = dob.value;
    const address1 = streetAddress.value;
    const address2 = city.value;
    const postalCode= postal.value; 
    const guestNumber = guests.value;
    const emailAddress = email.value;
    const phoneNumber= mobile.value;
    
    // Testing those values agianst our declared regex values
    const lastNametest = nameRegex.test(lastNameText);
    const firstNametest = nameRegex.test(firstNametext);
    const userNametest = userNameRegex.test(userNametext);
    const emailTest = emailRegex.test(emailAddress);
    const dobTest = dobRegex.test(dateOfBirth);
    const address1test = addressRegex.test(address1);
    const address2test = addressRegex.test(address2);
    const postalCodeTest = postalRegex.test(postalCode);
    const guestTest = guestRegex.test(guestNumber);
    const mobileTest = phoneRegex.test(phoneNumber);

     if (lastNametest == false){
        errorMessage += "Last Name Required."
    }
    if (firstNametest == false){
        errorMessage += "Last Name Required."
    }
    if (userNametest == false){
        errorMessage += "Last Name Required."
    }
    if (emailTest ==false){
        errorMessage += "Email Required"
    }
    if (dobTest == false){
        errorMessage += "DOB Required"
    }
    if (address1test == false){
        errorMessage += "Street Address Required"
    }
    if (address2test == false){
        errorMessage += "City Required"
    }
    if (postalCodeTest == false){
        errorMessage += "City Required"
    }
    if (guestTest == false){
        errorMessage += "Number of Guests Required"
    }
    if (mobileTest == false){
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
    var tipname = this.id +"Tip";
    document.getElementById(tipname).style.visibility ="visible";
    });

    // does the same thing but for the blur function and hides the previously unhidden tip
    document.getElementById(inputFields[i].id).addEventListener("blur",function(){
        var tipname2 = this.id +"Tip";
        document.getElementById(tipname2).style.visibility ="hidden";
    });
    
    }
    
 



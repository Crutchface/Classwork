const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//use express validator
const { body, validationResult } = require('express-validator');


const app = express();

errorMessages=[];
// sets an array for all our users
let allUsers = [];
// Set Pug as the template engine
// app.set('view engine', 'pug');
// sets ejs as the view engine
app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));

// Middleware to parse POST request body
app.use(bodyParser.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Student Registration System' });
});

// Registration form route
app.get('/register', (req, res) => {
    const errorMessages =[""];
    console.log(errorMessages)
    res.render('register', { title: 'Register Here'});
});
app.get('/allusers', (req, res) => {
    res.render('allusers', { title: 'Here is a list of all Users' , allUsers} );
});
// Handle form submission
app.post('/register', 
    // name
    body('name').isLength({min:3}).withMessage("Please enter a name over 3 characters"),
    // email
    body('email').isEmail().normalizeEmail().withMessage("Please enter a valid email"),
    // phone number
    body('phone').isLength({min:9 ,max:9}).withMessage("Please enter 9 digit phone number"),

    //address
    body('address').notEmpty().withMessage("Please enter your address"),
    
    // postal code
    // body('postal').isPostalCode().withMessage("Please enter a valid postal code"),
    body('postal').isLength({min:6, max:6}).withMessage("Please enter a 6 charater postal code"),

    // course
    body('course').notEmpty().withMessage("Please select a course"),

(req, res) => {
    // checkin the errors from the validation results
    const errors = validationResult(req);
        // if its not an empty array do this
        if (!errors.isEmpty()) {
            // console.log(errors.array())
            const errorMessages = errors.array().map(error => error.msg);
            console.log(errorMessages);
            // sends back to the registration page
            return res.render('register', { title: 'Registration Error', errorMessages});
        }


    const { name, email, course, phone, address, postal } = req.body;
    allUsers.push({name, email, course, phone, address, postal});
    res.render('confirm', { title: 'Registration Confirmed', name, email, course, phone, address, postal});
    console.log(allUsers);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

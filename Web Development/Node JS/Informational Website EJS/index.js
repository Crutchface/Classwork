// Chris Ferguson - Web Development - Node JS Assignment - Oct 17th

// ======================================================
// Calls in our npm modules 
// ======================================================

const express = require('express');
const sequelize = require('./utils/database');
const path = require("path");
// Loads in our express-validator module
const { body, validationResult } = require('express-validator');

// Start a empty array for error messages for form validation
errorMessages=[];
// defines our 
const app = express();
const port =8000;
// Brings in our homepage Random Greeting from randomgreeting.js
const randomGreeting = require("./randomgreeting");

// =======================================================
// Sync Database 
// =======================================================
sequelize.sync({force:false})
    .then(()=>{
        console.log("Database Synced")
    })
    .catch(err=>console.err("Cant sync", err));

// =======================================================
// Imports our models for use with sequelize
// =======================================================
const User = require('./models/users');

// =======================================================
// Sets our Root Directory
// =======================================================
const rootDir = path.dirname(require.main.filename);

// =======================================================
// Declares our static folders
// =======================================================
app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "views")));

// =======================================================
// Allows parsing more info from our html 
// =======================================================
app.use(express.urlencoded({extended:true}));

// =======================================================
// sets our engine to EJS
// =======================================================
app.set('view engine', 'ejs');

// =======================================================
// set our endpoints 
// =======================================================

// Get endpoint to load homepage
app.get('/', (req, res)=>{
    const greeting =randomGreeting.websiteGreeting()
    res.render('home', {greet:greeting, pageTitle: "Welcome to the place!"});
});

// Get endpoint to render Contact Page
app.get('/contact', (req, res)=>{
    res.render('contact',  {pageTitle: "Contact us here and Sign Up for the news-letter"});
});

// Add User and messages POST to write to DB 
app.post('/add-user', 
    // first name last name validation using express-validator
    body('firstname').isLength({min:3, max:20}).trim().withMessage("Please enter a first name over 3 characters. 20 Characters Max"),
    body('lastname').isLength({min:3, max:20}).trim().withMessage("Please enter a last name over 3 characters 20 Characters max"),
    // email validation using express-validator
    body('email').isEmail().normalizeEmail().withMessage("Please enter a valid email."),
    // phone number validation using express-validator
    body('phone').isLength({min:9 ,max:9}).withMessage("Please enter 9 digit phone number"),
    //address validation using express-validator
    body('city').notEmpty().trim().withMessage("Please enter your current city"),
    // postal code validation using express-validator
    body('postal').isLength({min:6, max:6}).trim().withMessage("Please enter a 6 charater postal code. No dashes please."),
    // message validation using express-validator
    body('message').notEmpty().trim().withMessage("Please add a personalized message"),
    
    async (req, res)=>{
        const errors = validationResult(req);
        // if errors is not an empty array do this
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);
            // sends back to the registration page
            return res.render('contact', { pageTitle: 'Contact Error', errorMessages});
        }
    // adding each user to an array defined at top
    const { firstname, lastname, email, phone, city,postal,message } = req.body;
    // insert data into the database
    await User.create({firstname, lastname, email, phone, city,postal,message });
    pageTitle="Thank you!"
    // uses a redirect using querys to pass info
    res.redirect(`/thankyou?firstname=${firstname}&lastname=${lastname}&email=${email}&pageTitle=${pageTitle}` )
});

// get endpoint to render about page  
app.get('/about', (req, res)=>{
    res.render('about', {pageTitle: "About us!"});
});

//  Get Endpoint to render thank you page after submission
app.get('/thankyou', (req, res)=>{
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const email = req.query.email;
    const pageTitle = req.query.pageTitle;
    res.render('thankyou',{firstname:firstname, lastname: lastname, email:email, pageTitle:pageTitle});
});

//  get endpoint to load allusers page 
app.get('/allusers', async (req, res)=>{
    const user = await User.findAll();
    res.render('allusers', {user, pageTitle : "These are all current users"});
});

// edit  endpoint for editing users
app.get('/edit/:id', async (req, res)=>{
    // use find by pk to find by primary key
    // takes the id to search as a aparameter
    const user = await User.findByPk(req.params.id);
    res.render('editusers', {user, pageTitle : "Edit User"})

});

// edit endpoint for update of user details 
app.post('/edit/:id', async (req, res)=>{
    // first name last name validation using express-validator
    body('firstname').isLength({min:3, max:20}).trim().withMessage("Please enter a first name over 3 characters. 20 Characters Max"),
    body('lastname').isLength({min:3, max:20}).trim().withMessage("Please enter a last name over 3 characters 20 Characters max"),
    // email validation using express-validator
    body('email').isEmail().normalizeEmail().withMessage("Please enter a valid email."),
    // phone number validation using express-validator
    body('phone').isLength({min:9 ,max:9}).withMessage("Please enter 9 digit phone number"),
    //address validation using express-validator
    body('city').notEmpty().trim().withMessage("Please enter your current city"),
    // postal code validation using express-validator
    body('postal').isLength({min:6, max:6}).trim().withMessage("Please enter a 6 charater postal code. No dashes please."),
    // message validation using express-validator
    body('message').notEmpty().trim().withMessage("Please add a personalized message")
    
    const {firstname, lastname, email, phone, city,postal,message } = req.body;
    await User.update({firstname, lastname, email, phone, city,postal,message },{
        where: {id: req.params.id}
    });
    
    res.redirect('/allusers');
});

// Endpoint for deleting a user
app.get('/delete/:id', async (req, res)=>{
    await User.destroy({where: {id: req.params.id}})
    res.redirect('/allusers');
});

// ============================================================
// 404 Handler 
// ============================================================

app.use((req, res)=>{
    // res.status(404).send("<h1>Error Page Not Found</h1>");
    res.render('404', {pageTitle : '404 Not Found'});
});

// ============================================================
// Listens to port and runs server
// ============================================================

app.listen(port, ()=>{
    console.log('Server running on http://localhost:'+port);
});
// =============================================================
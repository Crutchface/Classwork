// Calls in our npm modules =============================
const express = require('express');

const app = express();
const port =8000;
const path = require("path");
const randomGreeting = require("./randomgreeting");

// array for users to add to
let users =[];

// Root Dir
const rootDir = path.dirname(require.main.filename);


// Declares our static folders
app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "views")));


// Allows grabbing from url ==============================
app.use(express.urlencoded({extended:true}));

// sets our engine =======================================
app.set('view engine', 'ejs');


// set our endpoints =====================================

app.get('/', (req, res)=>{
    const greeting =randomGreeting.websiteGreeting()
    res.render('home', {greet:greeting, pageTitle: "Welcome to the place!"});
});

app.get('/contact', (req, res)=>{
    res.render('contact',  {pageTitle: "Contact us here and Sign Up for the news-letter"});
});

app.get('/about', (req, res)=>{
    res.render('about', {pageTitle: "About us!"});
});

app.get('/thankyou', (req, res)=>{
    res.render('thankyou', {pageTitle: "Thanks!"});
});

// Add User
app.post('/add-user', (req, res)=>{
    // adding each user to an array defined at top
    const { firstName, userName, email } = req.body;
    users.push({firstName, userName, email});
    console.log(req.body)
    res.render('thankyou' , {pageTitle: "Thank You" , personName: firstName})
});

// =======================================================




// Listens to port==============================================

app.listen(port, ()=>{
    console.log('Server running on http://localhost:'+port);
});
// =============================================================
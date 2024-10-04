// Calls in our npm modules =============================
const express = require('express');

const app = express();
const port =8000;
const path = require("path");
const randomGreeting = require("./randomgreeting");
// array for users
let users =[];
// const greeting =randomGreeting.websiteGreeting()
// Root Dir

const rootDir = path.dirname(require.main.filename);

app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "views")));


// Allows grabbing from url ==============================
app.use(express.urlencoded({extended:true}));

// sets our engine =======================================
app.set('view engine', 'ejs');


// set our endpoints =====================================

app.get('/', (req, res)=>{
    
    const greeting =randomGreeting.websiteGreeting()
    res.render('home', {greet:greeting} );
});

app.get('/contact', (req, res)=>{
    
    
    res.render('contact');
});

app.get('/about', (req, res)=>{
    
    
    res.render('about');
});

// Add User
app.post('/add-user', (req, res)=>{
    // adding each user to an array defined at top
    const { firstName, userName, email } = req.body;
    users.push({firstName, userName, email});
    console.log(req.body)
    res.redirect('/')
});


// app.get('/', (req, res)=>{
//     app.render('home',{pageTitle: "Welcome!! "} )
// });




// =======================================================






// Listens to port==============================================

app.listen(port);
// =============================================================
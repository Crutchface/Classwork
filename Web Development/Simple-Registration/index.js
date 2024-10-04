// Calls in our npm modules =============================
const express = require('express');

const app = express();
const port =8000;
// usernames array
let users =[];
// ========================================================

// sets our engine =======================================
app.set('view engine', 'ejs');

// Allows grabbing from url ==============================
app.use(express.urlencoded({extended:true}));

// sets our endpoints ===================================
// Homepage
app.get('/', (req, res)=>{
    res.render('index', {pageTitle: "Register User"});
});

// Add User
app.post('/add-user', (req, res)=>{
    // adding each user to an array defined at top
    users.push({name: req.body.username});
    res.redirect('/users')
});

// Endpoint to display all users
app.get('/users', (req, res)=>{
    res.render('users', { 
        pageTitle: "All Users" ,
        users
    });
});


// Listens to port==============================================

app.listen(port);
// =============================================================
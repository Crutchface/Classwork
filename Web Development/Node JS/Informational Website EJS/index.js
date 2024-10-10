// Chris Ferguson - Web Development - Node JS Assignment - Oct 17th
// ======================================================
// Calls in our npm modules 
// ======================================================
const express = require('express');
const sequelize = require('./utils/database');
const path = require("path");

// defines our 
const app = express();
const port =8000;
// Brings in our homepage Random Greeting
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
app.post('/add-user', async (req, res)=>{
    // adding each user to an array defined at top
    const { firstname, lastname, email, phone, city,postal,message } = req.body;
    // insert data into the database
    await User.create({firstname, lastname, email, phone, city,postal,message });
    console.log(req.body)
    res.render('thankyou' , {pageTitle: "Thank You" , personName: firstname, email: email})
});


// get endpoint to render about page  
app.get('/about', (req, res)=>{
    res.render('about', {pageTitle: "About us!"});
});

//  Get Endpoint to render thank you page after submission
app.get('/thankyou', (req, res)=>{
    res.render('thankyou', {pageTitle: "Thanks!"});
});

//  get endpoint to load allusers page 
app.get('/allusers', async (req, res)=>{
    const user = await User.findAll();
    res.render('allusers', {user,pageTitle : "These are all current users"});
});


// edit  endpoint for editing users
app.get('/edit/:id', async (req, res)=>{
    // use find by pk to find by primary key
    // takes the id to search as a aparameter
    const user = await User.findByPk(req.params.id);
    res.render('editusers', {user})

});
// edit endpoint for update of user details 
app.post('/edit/:id', async (req, res)=>{
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

// =======================================================




// Listens to port==============================================

app.listen(port, ()=>{
    console.log('Server running on http://localhost:'+port);
});
// =============================================================
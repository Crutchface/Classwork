

// loads express ands sets server up
const express = require("express");
const app = express();
const port = 8000;

//Set template engine to pug
// app.set("view engine", "pug");

// setting template engine to ejs
app.set("view engine", "ejs");

// helps find our path. A function in node.js
const path = require("path");


// retrieves the directory of the application. A function of node.js
const rootDir = path.dirname(require.main.filename);
 
// Creating a static directory
app.use(express.static(path.join(rootDir, "views")));

// arrays 
let contacts = {contacts: [
    {fname: "Sam",lname: "Smith", phone:"403-555-5555"},
    {fname: "John",lname: "Jones", phone:"403-555-5556"},
    {fname: "Susan",lname: "Samantha", phone:"403-555-5557"},
]};

// making a contacts page with an array Contacts are already js objects
app.get('/contacts',(req,res)=>{
    console.log(contacts);
    res.render("contact", contacts);
})
// creates our endpoint for the create post request
app.get('/create-post', (req, res)=>{
    // Sendfile is used to send files instead of strings
    // res.sendFile(path.join(rootDir, "views","form.html"));
    res.render("form");

});

// middleware for parsing info from posted forms and comes with express
// alternative is using bodyparser module. (requires installation)
app.use(express.urlencoded({extended:true}));


// endpoint to handle loading form.html
app.post('/create-post', (req, res)=>{
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    res.render("thankyou", {titlePage:"Thank You EJS", personName: req.body.firstName });

});

// app.get('/thankyou', (req, res, next)=>{
//     // Sendfile is used to send files instead of strings
//     // res.sendFile(path.join(rootDir, "/views/thankyou.html"));
//     res.render("thankyou")

// });

app.use((req,res)=>{
    res.render("404",{errorPage: req.url});
});


// listens for requests

app.listen(port, ()=>{
    console.log("The Server is running")
});


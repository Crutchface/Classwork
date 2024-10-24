

// loads express
const express = require("express");
// Initialize express object

// helps find our path. A function in node.js
const path = require("path");

const app = express();


// Define port number
const port = 8000;
// retrieves the directory of the application. A function of node.js
const rootDir = path.dirname(require.main.filename)
 
// app .use is a default setting. There are 5 common http protocols: 
// GET - Fetches data / webpage info
// POST - Used when sending data (forms use post)
// PUT - 
// PATCH - If I am updatiing data or part of the data
// DELETE - deletes all data

// Creating a static directory

app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "views")));


// middleware for parsing info from posted forms and comes with express
// alternative is using bodyparser module. (requires installation)
app.use(express.urlencoded({extended:true}));

// Using .get to create endpoint for '/' using GET
app.get('/', (req, res, next)=>{
    // res.send("<h1>Hello World! Welcome to the home page</h1>");
    // console.log("running in get()")
       // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    // console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "/views/home.html"));
    // runs the next functiion inline
    // next();

});

// app.use(()=>{
//     console.log("This is the next middleware")
// })

// about us endpoint
// app.get('/about',(req, res)=>{
//     res.send("This is OOSD Class for 2024")
// });

// contact us endpoint. app.get is middleware that runs sequentially
app.get('/contact',(req, res)=>{
    // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "views", "contact.html"));
});

app.get('/about',(req, res)=>{
    // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "views", "about.html"));
});
app.get('/home',(req, res)=>{
    // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "views", "home.html"));
});


// endpoint to handle loading demoform.html
app.get('/submit', (req, res)=>{
    res.sendFile(path.join(rootDir, "views", "contact.html"));

});


// endpoint to handle form submission
app.post('/submit',(req, res)=>{
    // Retreives content of the form submission
    console.log("Submit Endpoint : POST")
    // request.body gives access to forms sent by the webpage to the server
    console.log(req.body);
    // accessing specific variable in js objects
    console.log(req.body.course);
    // redirect back to the page back to the form and clearing it as a refresh
    // res.redirect('/submit')
    res.send(`<h1>Thank you for filling out the form. The input details are : </h1><p>Email : ${req.body.email}</p>`
    )
    
})



// app .use is handy for missing files. To be kept last 
// this can be used for error pages as they are not associated with any endpoint
// app.use is a middleeware
app.use((req, res)=>{
    // res.status(404).send("<h1>Error Page Not Found</h1>");
    res.sendFile(path.join(rootDir, "views", "404.html"));
});

// Sets the port number the webserver should listen for and what to do
app.listen(port, ()=>{
    console.log("The Server is running")
});


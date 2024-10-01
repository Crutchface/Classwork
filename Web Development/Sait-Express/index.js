// loads express
const express = require("express");
// Initialize express object

// helps find our path
const path = require("path");

const app = express();
// Define port number
const port = 8000;
// retrieves the directory of the application
const rootDir = path.dirname(require.main.filename)
 
// app .use is a default setting. There are 5 common http protocols: 
// GET - Fetches data / webpage info
// POST - Used when sending data (forms use post)
// PUT - 
// PATCH - If I am updatiing data or part of the data
// DELETE - deletes all data

// Creating a static directory
app.use(express.static(path.join(rootDir, "public")));


// Using .get to create endpoint for '/' using GET
app.get('/', (req, res)=>{
    // res.send("<h1>Hello World! Welcome to the home page</h1>");
    // console.log("running in get()")
       // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    // console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "/views/home.html"));
});

// about us endpoint
// app.get('/about',(req, res)=>{
//     res.send("This is OOSD Class for 2024")
// });

// contact us endpoint
app.get('/contact',(req, res)=>{
    // res.send("<h1>Contact us</h1><p> email is saitood@sait.ca</p>");
    // Sendfile is used to send files instead of strings
    console.log(rootDir);
    // console.log(__dirname); -- ALT WAY OF DIR
    res.sendFile(path.join(rootDir, "/views/contact.html"));
});





// app .use is handy for missing files. To be kept last 
// this can be used for error pages as they are not associated with any endpoint
app.use((req, res)=>{
    res.status(404).send("<h1>Error Page Not Found</h1>");
});

// Sets the port number the webserver should listen for and what to do
app.listen(port, ()=>{
    console.log("The Server is running")
});


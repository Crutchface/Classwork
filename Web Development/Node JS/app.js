// Import the HTTP module to create and use web servers
const http = require("http");
// imports file sytem model
const fs = require("fs");

const url = require("url");

const randomGreeting = require("./randomgreeting");
const cheerio = require('cheerio');


// console.log(randomGreeting.websiteGreeting());

// let address = "http://localhost:8000/demo.html?year=2019&month=october";
// let parsedAddress = url.parse(address, true);

// console.log("host: " + parsedAddress.host);
// console.log("Search: " +parsedAddress.search);
// console.log("Path: " +parsedAddress.pathname);
// console.log("Year: " +parsedAddress.query.year);
// console.log("Month: " +parsedAddress.query.month);

// // console.log(parsedAddress);
// // stores portnumber
// const portnumber = 8000;





// create a web server 
// http.createServer((req, res)=>{
//     // Reads from a file , tracks an error, and writes the data (content of file) which was stored as "data" variable. 
//     // This is then written as a response to the client request
//     fs.readFile("demo.html", (err, data)=>{
//         res.writeHead(200, {"Content-Type" : "text/html"});
//         res.write(data);
//         res.end();
//     });

    
    // setting the header / metadata of the website
    // res.writeHead(200, {"Content-Type" : "text/html"});

    // Response Body and ending connection at the same time
    // end() closes the connection
    // res.end("<h1>Hello World</h1>");


    // loggig request
    // see all the info within a request
    //   console.log(req)
    // // logging only the url of a request
    // console.log(req.url);
    // // Sends a response to client with res.
    // res.write("<h1> Hey there dudes</h1>");
    // // ending respons for sends
    // res.end();


    // Listens to port 8000 for request
// }).listen(portnumber, ()=>{
//     console.log("The Server is running on port : 8000");
// });
// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// Create HTTP server and listen on port 8000 for requests











http.createServer((request, response) => {
// takes the requested address and stores it in an object
let parsedAddress = url.parse(request.url, true);
// takes the pathname id from the parsed address object
console.log(parsedAddress.pathname);
// saves the file variable as . and the path requested in that request
let file = "." + parsedAddress.pathname;
// Reads and loads data from that file (if it exists)
fs.readFile(file, (err, data) => {
    

    if (err){
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<h1>404: Page Not Found</h1>");
        return response.end();
    // writes metadata to write data to
    }

// const addedHTML =


response.writeHead(200, { "Content-Type": "text/html" });


// response.write(data);
// console.log(randomGreeting.websiteGreeting());
    // console.log($);
    const $ = cheerio.load(data);
    $('.quoteOfTheDay').html("<p> class='quoteOfTheDay'"+randomGreeting.websiteGreeting()+"</p>");
    const modifiedHtml = $.html();

    // console.log(modifiedHtml);
    response.write(modifiedHtml);
return response.end();
});

}).listen(8000);

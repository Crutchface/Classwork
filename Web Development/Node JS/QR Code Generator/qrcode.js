import inquirer from "inquirer"; // User interaction
import qr from "qr-image"; // QR code generation
import fs from "fs"; // File system access

// Step 1: Get User Input for the URL
inquirer
  .prompt([
    {
      message: "Please enter your link to generate a QR code:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL; // Extract the URL from the answer object

    // Step 2: Generate QR Code Image
    const qr_image = qr.image(url, { type: "png" }); // Create QR image data

    // Save the QR Code Image (png format)
    qr_image.pipe(fs.createWriteStream("qr_code.png"));

    // Step 3: Save User Input as Text File
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    console.error("An error occurred:", error); // Handle errors
  });
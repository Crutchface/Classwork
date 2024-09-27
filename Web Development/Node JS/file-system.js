

const fs = require("fs");
// automatically adds file and appends to file based on infor passed to it. (keeps adding data)
fs.appendFile("newFile.txt", "Hello World For Reals \n", err =>{
    if (err) throw err;
    console.log("file saved append");
});
// using open
fs.open('newFile2.txt', 'w', (err, file) =>{
    if (err) throw err;
    console.log('file saved. Open');

});

// writing file (overwrites onto file)

fs.writeFile("newfile3.txt", "Hello World", err =>{
    if (err) throw err;
    console.log("file saved: Write");
});
fs.rename("newFile.txt", "renamedFile.txt", err => {
    if (err) throw err;
    console.log("File renamed.");
    });

    
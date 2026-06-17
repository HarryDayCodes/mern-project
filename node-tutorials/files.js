const fs = require('fs')  // fs = file system

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);  // Error handling
    }
    console.log(data.toString()); // buffer
})  // section after comma will fire after blog1.txt has been read [ASYNCHRONOUS - it's not going to stop the code furthe down from executing] 

// writing files    
fs.writeFile('./docs/blog1.txt', "Hello World!", () =>{  // If blog1.txt didn't exist, it would create it
    console.log("File was written")
})  // WARNING - This replaces insteading of adding to the txt file


// directories (adding and removing)
if (!fs.existsSync('./assets')){

    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created");
    })
} else {  // Delete directory if it exists
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder deleted')
    }
)}
// deleting files

if (fs.existsSync('.docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("File Deleted")
    })
}
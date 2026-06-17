const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf8'})  // args = 'Where reading from'
const writeStream = fs.createWriteStream('./docs/blog3.txt')

// readStream.on('data', (chunk) => {  // Chunking data to work on in streams
//     console.log('----- NEW CHUNK ------')
//     console.log(chunk);
//       writeStream.write('\nNEW CHUNK\n');  // Writing to blog3.txt in chunks
//     writeStream.write(chunk); 
// });

// piping (does the same as the commented out lines)
readStream.pipe(writeStream)
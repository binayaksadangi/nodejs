const fs = require('fs');
//!read stream
const readStream = fs.createReadStream('./docs/large.txt',{encoding:'utf-8'});
//here on createReadStream it gives the buffer data. ON is like onclick fun.

// readStream.on('data',(chunk)=>{
//     console.log('------NEW ONE------')
//     console.log(chunk);
// })

// use tostring to see on readable format 
//or use a second obj arg on create stream as above

//! Write stream

const writeStream = fs.createWriteStream('./docs/large2.txt')

// readStream.on('data',(chunk)=>{
//     console.log('------NEW ONE------')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// })

//!piping
//it is doing the same thing as the above function
readStream.pipe(writeStream);
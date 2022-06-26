const fs = require('fs');

//!read files
//this function is async and it will call the callback function after it gets completed.

fs.readFile('./try.txt',(err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString());
        //it will return a package of data known as buffer when we read this file
    }
})

//! writeing files
//write file takes 3 arg ... file path, content, callback fun
//if we give a file name that DNE then it create a file for us with the content

fs.writeFile('./try1.txt','Hey Baby',()=>{
    console.log("file written")
});

//! Directories
//mkdir to create a dir, and if exists it will show an error message and rmdir to remove the dir
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("folder created");
        }
    })
} else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err.message);
        }
    })
}

//! delete file
// we use unlink method to delete the file
if(fs.existsSync('./try1.txt')){
    fs.unlink('./try1.txt',(err)=>{
        if(err){
            console.log(err.message);
        }
        console.log("File deleted");
    })
}
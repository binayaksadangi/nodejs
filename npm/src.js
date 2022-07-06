const http = require('http');
const fs = require ('fs');
const _ = require('lodash');
//by using http we will crreate a server

//after getting a req it will print the message on server console
const server = http.createServer((req,res)=>{
   const num = _.random(1,20);
   console.log(num);
    res.setHeader('Content-Type','text/html');

    let path = './clintServer/views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
         case '/aboutmie':
          res.setHeader('Location', '/about');
            res.statusCode = 301;
           break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;

    }
    //send a html file
    //read the file and send the data to browser
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
           
            res.write(data);
            res.end();
            // if we are sending only one thing then we can just send in end(data);
        }
    })
    
});
//* Here in res we 1st set the type of res we want to send then we send the res then we stop. 
//after we run the server it will listen to this port
server.listen(3000,'localhost',()=>{
    console.log('listening on 3000')
})
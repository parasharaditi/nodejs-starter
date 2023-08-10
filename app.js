 //http - launch a server, send requests
 //https- launch SSL server
 //os
 //fs
 //path
 const http=require('http') //js, path, core module

 const server=http.createServer((req,res)=>{
    console.log(req)
    //process.exit();
 }
);

server.listen(3000);

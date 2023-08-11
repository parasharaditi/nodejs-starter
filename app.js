
 const http=require('http') //js, path, core module
 
 const routes = require("./routes")

 console.log(routes.hardcodedText)
 
 const server=http.createServer(routes.handler);

  //http - launch a server, send requests
 //https- launch SSL server
 //os
 //fs
 //path



// const server=http.createServer((req,res)=>{
//     //console.log(req.url, req.method, req.headers)
//     //process.exit();
//    // res.setHeader('Content-Type','text/html');
//     //res.write()
//     //res.end()
   
//    });

server.listen(3000);

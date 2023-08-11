 //http - launch a server, send requests
 //https- launch SSL server
 //os
 //fs
 //path
 const http=require('http') //js, path, core module
 const fs=require("fs")

 const server=http.createServer((req,res)=>{
    //console.log(req.url, req.method, req.headers)
    //process.exit();
   // res.setHeader('Content-Type','text/html');
    //res.write()
    //res.end()
    const url=req.url;
    const method= req.method;
    if(url === '/')
    {
      res.write('<html><head><title>My page</title></head><body>Hi welcome!<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>')
      return res.end();
    }
    if(url === '/message' && method=== 'POST')
    {
      fs.writeFileSync('message.txt','DUMMY')
      res.statusCode=302;
      res.setHeader('Location','/');
      return res.end()
    }
         res.setHeader('Content-Type','text/html');
         res.write("<html><head><title>My page</title></head><body><h1>Hi welcome to message!</h1></body></html>")
         res.end();
   });

server.listen(3000);

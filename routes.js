const fs=require('fs')


//function to connect app.js to route.js
const  requesthandler = (req,res)=>{
    const url=req.url;
    const method= req.method;
    if(url === '/')
    {
      res.write('<html><head><title>My page</title></head><body>Hi welcome!<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>')
      return res.end();
    }
    if(url === '/message' && method=== 'POST')
    {
      const requestBody=[];
      req.on('data',(chunk)=>{  //chunk of data receiver from the stream
        console.log(chunk); 
        requestBody.push(chunk);
      });
      return req.on('end',()=>{ //added return so that the next block of code does not execute before this
        //this is where we act with the data
        const parsedBody= Buffer.concat(requestBody).toString();  //sparsed body is the buffer
        console.log(parsedBody)
        const message=parsedBody.split('=')[1]; //because the inpust was message=aditi
        fs.writeFile('message.txt',message,(error)=>{ //function will be called once the file is written
          res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
        })
        
      });
    
    
    }
         res.setHeader('Content-Type','text/html');
         res.write("<html><head><title>My page</title></head><body><h1>Hi welcome to message!</h1></body></html>")
         res.end();
}

//module.exports= requesthandler; // to expoet requesthandler from module
//module.exports.handler=requesthandler
//exports.handler=requesthandler

module.exports={
    handler:requesthandler,
    hardcodedText:"Some hard coded text"
}
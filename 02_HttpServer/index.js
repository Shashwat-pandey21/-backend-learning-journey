const http = require("http");

const myServer = http.createServer((req,res)=>{
    // console.log("New request receive");           
   // console.log(req.headers);   //req.header tells about all info about request from where it come which device,loaction,ip adress
   // console.log(req);
    console.log("New Request Recive Again");

    res.end("Hello From Node js Server");
});

myServer.listen(8000, ()=>{
    console.log("Server Start at port 8000 ");
});
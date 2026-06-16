
const express = require("express");

const app = express();


//basic routing => app.METHOD(PATH,HANDLER);

//routing means -> on which url request which code run

app.get("/",(req,res)=>{
    return res.send("Helllo From Home Page");
});

app.get("/about",(req,res)=>{
    return res.send(`Hello from About Page ${req.query.name} my age is ${req.query.age}`);
});


app.listen(8000, () => console.log("server start"));
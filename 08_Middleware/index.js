const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


//Middeleware

app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {

    fs.appendFile( "Back/08_Middleware/log.txt", `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}\n`,(err,data) => {
            next();
        }
    );
});


app.post("/api/users", (req,res) =>{
    const body = req.body;
    users.push({...body,id: users.length+1});
    fs.writeFile('./07_Middleware/MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
         return res.json({status : "success", id: users.length});
    })
    
   
});

app.patch("/api/users/:id", (req,res) =>{

    const id = Number(req.params.id);
    const body = req.body;

    console.log("PATCH HIT");
    console.log(req.params.id);
    console.log(req.body);

    const userIndex = users.findIndex((user) => user.id === id);

    users[userIndex] = {...users[userIndex], ...body,};
   
    fs.writeFile('./07_Middleware/MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
         return res.json({status : "success"});
    });

});



app.delete("/api/users/:id", (req,res) =>{

    const id = Number(req.params.id);

    const newUsers = users.filter((user) => user.id !== id);

    fs.writeFile('./07_Middleware/MOCK_DATA.json', JSON.stringify(newUsers),(err,data)=>{
         return res.json({status : "success"});
    });

});



app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}`);
});
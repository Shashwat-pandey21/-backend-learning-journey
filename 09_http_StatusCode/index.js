
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


//Middeleware - Pluging
app.use(express.urlencoded({extended: false}));


app.get("/api/users/:id", (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : 'user not found'});
     return res.json(user);
});

app.post("/api/users", (req,res) =>{
    const body = req.body;

    if(!body ||
       !body.first_name ||
       !body.last_name || 
       !body.email ||
       !body.gender|| 
       !body.job_title){
        return res.status(400).json({msg: "All fields are req..."});
       }

    users.push({...body,id: users.length+1});
    fs.writeFile('./09_http_StatusCode/MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
         return res.status(201).json({status : "success", id: users.length});
    })
    
   
});

app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}`);
});

const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");


const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Conecction
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log("Mongo Error",err));


//Shema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, // => necessary
    },
    lastName: {
        type : String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender:{
        type: String,
    },
});

//model
const User = mongoose.model('user', userSchema);


//Middeleware

app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {

    fs.appendFile( "Back/08_Middleware/log.txt", `\n${Date.now()}: ${req.ip} ${req.method} ${req.path}\n`,(err,data) => {
            next();
        }
    );
});


app.get("/api/users", (req, res) => {
return res.json(users);
});

 
app.get("/users", (req, res) => {

    const html = `

    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);

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
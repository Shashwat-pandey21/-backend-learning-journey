
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");


const app = express();
const PORT = 8000;

//Connect Mongoose
 mongoose.connect('mongodb://127.0.0.1:27017/yt-app-1')
 .then(() =>console.log("MongoDB Connected"))
 .catch((err) => console.log("Mongo Error",err));

// Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    },
});

// Model
const User = mongoose.model("user",userSchema);

//Middeleware - Pluging
app.use(express.urlencoded({extended: false}));


app.get("/api/users/:id", (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : 'user not found'});
     return res.json(user);
});




app.post("/api/users", async (req,res) =>{
    const body = req.body;

    if(!body ||!body.first_name || !body.last_name || !body.email || !body.gender||!body.job_title){
       
        return res.status(400).json({msg: "All fields are req..."});
       }

   const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
   });

   console.log("result",result);
   return res.status(201).json({msg : "Success"})
  
});




app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}`);
});

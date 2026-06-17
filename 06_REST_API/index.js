
//_______Building REST API using node and express_______________---


const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


//Middeleware - Pluging

app.use(express.urlencoded({extended: false}));

// ---------------- REST API Routes ----------------


//1. Used by frontend apps, mobile apps, Postman, etc. request => Returns users data in JSON format.
app.get("/api/users", (req, res) => {
return res.json(users);
});


//2.Render users as HTML => Used when a browser requests a webpage.
 
app.get("/users", (req, res) => {

    const html = `

    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);

});

//3. Get user by ID
app.get("/api/users/:id", (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
     return res.json(user);
});

//4. Create new user
app.post("/api/users", (req,res) =>{
    const body = req.body;
    users.push({...body,id: users.length+1});
    fs.writeFile('./06_REST_API/MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
         return res.json({status : "success", id: users.length});
    })
    
   
});

//5.Edit the user with id
app.patch("/api/users/:id", (req,res) =>{
    return res.json({status : "pending"});
});

//6. Delete the user with id
app.delete("/api/users/:id", (req,res) =>{
    return res.json({status : "pending"});
});


app.listen(PORT, () => {
console.log(`Server Started at port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const users = require('./sampleData.json');
const fileSystems = require('fs'); //inbuild package

const app = express();
app.use(express.json());
const port = 8000;
// app.use(cors({
// origin: "http://localhost:5173",
// methods:["GET","POST","PATCH","DELETE"],
// }));

app.use(cors());

//Fetch All user records
app.get('/users', (req, res) => {
return res.json(users);
});

//Delete user records
app.delete("/users/:id",(req,res) => {
let pid = Number(req.params.id);
let filteredUser = users.filter((user) => user.id !== pid);
fileSystems.writeFile("./sampleData.json",JSON.stringify(filteredUser),(err,data) => {
return res.json(filteredUser);
})
});

//Add new user
app.post("/users",(req,res) => {
let{name,age,city} = req.body;
if(!name || !age || !city) {
res.status(400).send({msg:"All Fields Required"});
}
let id = Date.now();
users.push({id,name,age,city});
fileSystems.writeFile("./sampleData.json",JSON.stringify(users),(err,data) => {
return res.json({msg:"New User Added Successfully"})
})
})

//Update existing user
app.patch("/users/:id",(req,res) => {
let id = Number(req.params.id);
let{name,age,city} = req.body;
if(!name || !age || !city) {
res.status(400).send({msg:"All Fields Required"});
}
let index =  users.findIndex((user) => user.id == id);
users.splice(index,1,{...req.body});
fileSystems.writeFile("./sampleData.json",JSON.stringify(users),(err,data) => {
return res.json({msg:"User Updated Successfully"});
})
})

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`App is running on port ${port}`);
  }
});

const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const Employer = require("./models/Employer")
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const dbURL="mongodb+srv://Seifelewa:s12e12@cluster0.dwyp7.mongodb.net/FullStack-Project?retryWrites=true&w=majority";
mongoose.connect(dbURL).then((result)=>{
  app.listen(process.env.PORT||3001);
  console.log("Connected successfully")}).catch((err)=>console.log("Connection failed"));

app.use(express.static(path.resolve(__dirname, "../React-project/build")));


app.get("/test1", (req, res) => {
  res.json({
    message: [{name: "Abdel-Rahman", rate:20, rating:1, jobCount:30},
    {name: "Maryam Nouh", rate:40, rating:3, jobCount:56},
    {name: "Seif Elewa", rate:30, rating:2, jobCount:43},
    {name: "Youssef Mansi", rate:20, rating:5, jobCount:99},
  ]
  });
});


app.post("/loginTest", (req,res)=>{
    username=req.body.username;
    password= req.body.password;
    
    Employer.findOne({username}, (err, res2)=>{
      if(err) throw err;
      const user= res2;
      
      if(password === user.Password){
        console.log("success");
        res.redirect('/find-talent-it');
      } else{
        console.log("failure");
        res.redirect('/login');
      }
    }).catch((err)=> console.log(err));

});


app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../React-project/build", "index.html")
  );
});

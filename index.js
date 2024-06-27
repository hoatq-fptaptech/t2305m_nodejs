const express = require("express");
const app = express();
const port = 2305;

app.listen(port,function(){
    console.log("Server is running....");
});
// set static
app.use(express.static("public"));
// set view engine
app.set("view engine",'ejs');
// route
app.get("/",async function(req,res){
    const host = "mongodb://localhost:27017";
    const db_name = "t2305m";
    const mongoose = require("mongoose");
    // connect
    await mongoose.connect(`${host}/${db_name}`);
    // query
    const Student = require("./model/student.model");

    let list = await Student.find();
    // res.sendFile(__dirname+"/views/home.html");
    let x =0;
    res.render("home",{
        students: list,
        count : x
    });
})
app.get("/about-us",function(req,res){
    res.send("About Us");
})
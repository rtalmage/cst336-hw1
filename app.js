const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index.html");
});

app.get("/specs", function(req, res){
    res.render("specs.html");
});

app.get("/education", function (req,res) {
    res.render("education.html");
});

app.get("/uses", function(req,res) {
    res.render("uses.html");
})

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...")
});
// jshint esversion:6
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");


});

app.listen(4000, function(){
  console.log("listening on port 4000");
});

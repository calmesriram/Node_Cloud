var express = require('express');
var app = express();
var bodyparser = require('body-Parser');
var mongoose = require('mongoose');
var cors = require('cors');
var databaseconnection = require('./Dbconnection/config.js');

mongoose.Promise = global.Promise;

function check(){
mongoose.connect(databaseconnection.url,{useNewUrlParser:true}).then(()=>{
    console.log("Mongodb connection Successful...");
    // clearInterval(clearint);
}).catch(err =>{
    console.log("Could not connect the database");
});
}
// var clearint = setInterval(check,5000);
var clearint = setInterval(check,10000);

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());

// app.listen(3000);
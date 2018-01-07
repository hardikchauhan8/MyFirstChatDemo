
var app = require('express')();
var mongoose = require('mongoose');
var db;

//ec2-35-154-211-85.ap-south-1.compute.amazonaws.com
var config = {
    "USER"    : "",           
    "PASS"    : "",
    "HOST"    : "localhost",  
    "PORT"    : "27017", 
    "DATABASE" : "MyChatDemoDB",
    "SECRET" : "nightfox"
  };

  var dbPath  = "mongodb://"+config.USER + ":"+
  config.PASS + "@"+
  config.HOST + ":"+
  config.PORT + "/"+
  config.DATABASE;  

  var standardGreeting = 'Hello World!';

  var greetingSchema = mongoose.Schema({
    sentence: String
  }); 
  db = mongoose.connect(dbPath);
  app.set('superSecret', config.SECRET);
  

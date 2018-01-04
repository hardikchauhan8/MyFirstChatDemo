
var app = require('express')();
var mongoose = require('mongoose');
var db;

//ec2-35-154-211-85.ap-south-1.compute.amazonaws.com
var config = {
    "USER"    : "",           
    "PASS"    : "",
    "HOST"    : "ec2-35-154-211-85.ap-south-1.compute.amazonaws.com",  
    "PORT"    : "27017", 
    "DATABASE" : "MyChatDemoDB",
    "secret" : "nightfox"
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
  var Greeting= mongoose.model('Greeting', greetingSchema);

  db = mongoose.connect(dbPath);

  mongoose.connection.once('open', function() {
    var greeting;
    Greeting.find( function(err, greetings){
     if( !greetings ){     
        greeting = new Greeting({ sentence: standardGreeting }); 
        greeting.save();
      } 
    }); 
  });
  app.set('superSecret', config.secret);
  

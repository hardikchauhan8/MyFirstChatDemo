var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var express = require('express');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');
var config = require('./config');

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var User = require('./models/users');
io.on('connection', function(socket){
  console.log('a user connected');
});


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

apiRoutes.get('/', function (req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function (req, res) {
    User.find({}, function (err, users) {
        if (users.length <= 0) {
            res.json({ "message": "No user found" });
        } else {
            res.json(users);
        }

    });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.put('/users', function (req, res) {

    console.log(JSON.stringify(req.body));
    // create a sample user
    var newUser = new User({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.isadmin
    });

    // save the sample user
    newUser.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

http.listen(3000, function(){
    console.log('listening on *:3000');
  });
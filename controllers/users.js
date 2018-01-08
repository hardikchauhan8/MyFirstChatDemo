
var http = require('http');
var io = require('socket.io')(http);
var jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var User = require('../models/users');
io.on('connection', function (socket) {
    console.log(socket);
});


exports.login = function (req, res) {

};

exports.register = function (req, res) {
    
    console.log(req.body);
    console.log(req.file);

}; 

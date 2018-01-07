
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// const api = require('./apiRoutes');

// var User = require('./models/users');
// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// // route to return all users (GET http://localhost:8080/api/users)
// apiRoutes.get('/users', function (req, res) {
//     User.find({}, function (err, users) {
//         if (users.length <= 0) {
//             res.json({ "message": "No user found" });
//         } else {
//             res.json(users);
//         }

//     });
// });

// // route to return all users (GET http://localhost:8080/api/users)
// apiRoutes.put('/users', function (req, res) {

//     console.log(JSON.stringify(req.body));
//     // create a sample user
//     var newUser = new User({
//         name: req.body.name,
//         password: req.body.password,
//         admin: req.body.isadmin
//     });

//     // save the sample user
//     newUser.save(function (err) {
//         if (err) throw err;

//         console.log('User saved successfully');
//         res.json({ success: true });
//     });
// });
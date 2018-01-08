var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
const api = require('./routes/apiRoutes');
var config = require('./config');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// apply the routes to our application with the prefix /api
app.use('/api/v1', api);

app.get('/', function(request, response) {
    console.log('test called');
    response.json({ message: 'Welcome to the coolest API on earth!' });
});

http.listen(port, function(){
    console.log('listening on : ' + port);
  });
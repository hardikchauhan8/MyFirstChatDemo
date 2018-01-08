

exports.testget = function (req, res) {
    res.json({ message: 'This is the test get api' });
};

exports.testpost = function (req, res) {

    console.log("req.header = " + JSON.stringify(req.get('x-auth-token')));
    res.json({ message: 'This is the test post api' });
};
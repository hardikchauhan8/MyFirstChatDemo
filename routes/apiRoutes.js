const express = require('express');
const app = express();
var router = express.Router();
const crypto = require('crypto');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)

            cb(null, raw.toString('hex') + '.jpg')
        })
    }
})

var upload = multer({ storage: storage })
const testController = require('../controllers/test')
const userController = require('../controllers/users');

router.route('/test').get(testController.testget);
router.route('/test').post(testController.testpost);

router.route('/login').post(userController.login);
router.route('/register').post(upload.single('profilepic'), userController.register);

module.exports = router;
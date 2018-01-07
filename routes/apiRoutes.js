const express = require('express');
const app = express();
var router = express.Router();

const testController = require('../controllers/test')
const userController = require('../controllers/users');

router.route('/test').get(testController.testget);
router.route('/test').post(testController.testpost);

module.exports = router;
var express = require('express');
var router = express.Router();

var users1 = require('../controller/userscontroller');

/* GET users listing. */
router.get('/', users1.user) 

module.exports = router;

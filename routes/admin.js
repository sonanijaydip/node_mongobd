var express = require('express');
var router = express.Router();

var admin1 = require('../controller/admincontroller')

/* GET home page. */
router.get('/', admin1.admin)

module.exports = router;
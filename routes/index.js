var express = require('express');
var router = express.Router();

var index1 = require('../controller/indexcontroller')

/* GET home page. */
router.get('/', index1.index)

module.exports = router;

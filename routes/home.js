var express = require('express');
var router = express.Router();
const multer= require('multer');


const controller= require('../controller/sellerController');

router.get('/home', controller.home);

module.exports = router;

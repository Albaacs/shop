var express = require('express');
var router = express.Router();
const multer= require('multer')
let controller= require('../controller/sellerController');


const storage = multer.diskStorage({
  destination: 'public/imageseller',
  filename:(_req,file,cb) => {
    const extension = file.originalname.slice(file.originalname.lastIndexOf("."))
    console.log(extension)
    cb(null, new Date().valueOf() + extension)
  }
});

const upload = multer({storage}).single("img_seller");
//localhost:3000/seller


router.get('/registerSeller', controller.registerSeller);

router.post('/sendData', upload, controller.sendData);

router.get('/infoSeller/:id_seller', controller.infoSeller);


module.exports = router;

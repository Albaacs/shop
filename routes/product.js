var express = require('express');
var router = express.Router();
const multer= require('multer');
let controller= require('../controller/productController');


const storage = multer.diskStorage({
  destination: 'public/imageproduct',
  filename:(_req,file,cb) => {
    const extension = file.originalname.slice(file.originalname.lastIndexOf("."))
    console.log(extension)
    cb(null, new Date().valueOf() + extension)
  }
});

const upload = multer({storage}).single("img_product");

router.get('/product/:id_product', controller.viewProduct)

router.post('/sendDataProduct/:id_seller', upload, controller.sendDataProduct);

router.get('/editProduct/:id_product', controller.editProduct);

router.post('/updateProduct/:id_product', controller.updateProduct);

router.get('/deleteProduct/:id_product', controller.deleteProduct);

module.exports = router;
let connection = require('../config/db');

let productController = {};


productController.viewProduct = (req, res) => {
    let id_product = req.params.id_product;
    let id_seller = req.params.id_seller;

    let sql = `SELECT * FROM seller WHERE id_seller = '${id_seller}'`;
    connection.query(sql, (error, result) => {
        if (error) throw error;

    let sql = `SELECT * FROM product WHERE id_product = '${id_product}'`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        
    
                res.render('product', { resultProducts: result[0] })
    
            })
    })
}
productController.sendDataProduct = (req, res) => {
  
    let { name,  description ,price} = req.body;
    let img_product = req.file.filename;
    let id_seller = req.params.id_seller;
    let sql = `INSERT INTO product (name, description, img_product,price, id_seller)  
    VALUES ('${name}', '${description}', '${img_product}',${price}, ${id_seller}) `;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('back')
    })
}


productController.editProduct= (req,res)=>{
    let id_product= req.params.id_product;

    let sql=`SELECT * FROM product WHERE id_product=${id_product}`;


    connection.query(sql, (err,result)=>{
        if(err)throw err;

        res.render('uploadProduct', { result :  result[0] });

    })
}

productController.updateProduct= (req,res)=>{
    let id_product= req.params.id_product;

    let {name,description}= req.body;

    let sql= `UPDATE product SET name='${name}', description='${description}' WHERE id_product = ${id_product}`;

    connection.query(sql,(err,result)=>{
        if(err)throw err;

        res.redirect('back')
        console.log("Producto editado")
    })

}

productController.deleteProduct = (req,res)=>{
    let id_product = req.params.id_product;

    let sql = `DELETE FROM  product WHERE id_product = ${id_product}`;

    connection.query(sql, (err,result)=>{
        if(err)throw err;
        res.redirect('back');
    })
}


module.exports = productController;
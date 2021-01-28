let connection = require('../config/db');
let sha1 = require('sha1');




let sellerController = {};


sellerController.home = (req, res) => {
    let sql = 'SELECT * FROM seller';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        res.render('home', { results })
    })
}



sellerController.registerSeller = (req, res) => {

    res.render('registerSeller');
}


sellerController.sendData = (req, res) => {
 
    let { name, last_name, email, password, description, phone_number } = req.body;
    let img_seller = req.file.filename;
    const encPassword = sha1(password)

    let sql = `INSERT INTO seller (name, last_name, email, password, description, phone_number, img_seller) VALUES
     ('${name}','${last_name}', '${email}', '${encPassword}', '${description}', '${phone_number}', '${img_seller}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/home")
    })
}

sellerController.infoSeller = (req, res) => {
    let id_seller = req.params.id_seller;

    let sql = `SELECT * FROM seller WHERE id_seller = '${id_seller}'`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        // res.render('seller', {result})
        let sqlProducts = `SELECT * FROM product WHERE id_seller = '${id_seller}'`;

        connection.query(sqlProducts, (error, resultProducts) => {
            if (error) throw error;

            res.render('seller', { resultseller: result[0], resultProducts })

        })
    })
}


module.exports = sellerController;
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop'
});

connection.connect(
    function(error) {
        if (error) {
            throw error;
        } else {
            console.log('OK shop database')
        }
    }
);

module.exports = connection;
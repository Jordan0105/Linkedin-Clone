const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'nicajobs',  
    password: 'Qwer1234', 
    database: 'nicajobs'  // Replace with your MySQL database name
});

module.exports = db;
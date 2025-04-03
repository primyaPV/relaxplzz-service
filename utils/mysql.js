const mysql = require('mysql2');

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
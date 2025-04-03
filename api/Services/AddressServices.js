const db = require('../../utils/mysql');

exports.getAllAddress = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM address';
        db.query(sql, (err, results) => {
            if (err) {
                reject({ message: "Error fetching data", error: err });
            } else {
                resolve({ message: "Addresses fetched successfully", data: results });
            }
        });
    });
};
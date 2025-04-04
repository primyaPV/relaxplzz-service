const db = require('../../utils/mysql');

exports.addAddress = (street, building, road, area, city, state, zip, contact, link) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO address (street, building, road, area, city, state, zip, contact, link) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(sql, [street, building, road, area, city, state, zip, contact, link], (err, result) => {
            if (err) {
                return reject({ message: "Error inserting data", error: err });
            }
            resolve({ message: "Address added successfully", insertId: result.insertId });
        });
    });
};

exports.getAllAddress = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM address';
        db.query(sql, (err, results) => {
            if (err) {
                return reject({ message: "Error fetching data", error: err });
            }
            resolve({ message: "Addresses fetched successfully", data: results });
        });
    });
};

exports.updateAddress = (id, street, building, road, area, city, state, zip, contact, link) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE address
                     SET street = ?, building = ?, road = ?, area = ?, city = ?, state = ?, zip = ?, contact = ?, link = ?
                     WHERE id = ?`;

        db.query(sql, [street, building, road, area, city, state, zip, contact, link, id], (err, result) => {
            if (err) {
                return reject({ message: "Error updating data", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: `Address with ID ${id} not found` });
            }

            resolve({ message: "Address updated successfully" });
        });
    });
};

exports.deleteAddress = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM address WHERE id = ?`;

        db.query(sql, [id], (err, result) => {
            if (err) {
                return reject({ message: "Error deleting data", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: `Address with ID ${id} not found` });
            }

            resolve({ message: `Address with ID ${id} deleted successfully` });
        });
    });
};
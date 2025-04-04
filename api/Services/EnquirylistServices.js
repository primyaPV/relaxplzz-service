const db = require('../../utils/mysql');

exports.createEnquiry = (Name, Email, PhoneNumber, Subject, Message) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO enquirylist (Name, Email, PhoneNumber, Subject, Message) 
                       VALUES (?, ?, ?, ?, ?)`;

        db.query(query, [Name, Email, PhoneNumber, Subject, Message], (err, result) => {
            if (err) {
                return reject({ message: "Error inserting data", error: err });
            }
            resolve({ message: "Enquiry added successfully", insertId: result.insertId });
        });
    });
};

exports.updateEnquiry = (id, Name, Email, PhoneNumber, Subject, Message) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE enquirylist 
                       SET Name = ?, Email = ?, PhoneNumber = ?, Subject = ?, Message = ? 
                       WHERE id = ?`;

        db.query(query, [Name, Email, PhoneNumber, Subject, Message, id], (err, result) => {
            if (err) {
                return reject({ message: "Error updating data", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: "Enquiry not found for the provided enquiryId" });
            }

            resolve({ message: "Enquiry updated successfully", affectedRows: result.affectedRows });
        });
    });
};

exports.deleteEnquiry = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM enquirylist WHERE id = ?`;

        db.query(query, [id], (err, result) => {
            if (err) {
                return reject({ message: "Error deleting data", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: "Enquiry not found for the provided enquiryId" });
            }

            resolve({ message: "Enquiry deleted successfully", id: id });
        });
    });
};
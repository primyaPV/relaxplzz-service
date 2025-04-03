const db = require('../../../utils/mysql');


exports.postEnquiryList = (req, res) => {

    const { Name, Email, PhoneNumber, Subject, Message } = req.body;

    const sql = `INSERT INTO enquirylist (Name, Email, PhoneNumber, Subject, Message) 
                 VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [Name, Email, PhoneNumber, Subject, Message], (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.status(500).json({ message: "Error inserting data", error: err });
        }

        res.status(200).json({ message: "Enquiry added successfully", insertId: result.insertId });
    });
};


exports.updateEnquiryList = (req, res) => {
    const { id, Name, Email, PhoneNumber, Subject, Message } = req.body;

    const sql = `UPDATE enquirylist SET Name = ?, Email = ?, PhoneNumber = ?, Subject = ?, Message = ? WHERE id = ?`;


    db.query(sql, [Name, Email, PhoneNumber, Subject, Message, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error updating data", error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Enquiry not found for the provided enquiryId" });
        }

        res.status(200).json({ message: "Enquiry updated successfully", affectedRows: result.affectedRows });
    });
};

exports.deleteEnquiryList = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM enquirylist WHERE id=? `;
    db.query(sql, [id], (err, result) => {
        if (err) {

            return res.status(500).json({ message: "Error Deleting data", error: err });
        }
        return res.status(200).json({ message: "Data Deleted Successfully", id: id });
    });
};
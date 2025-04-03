const db = require('../../../utils/mysql');
const addressService = require('../../Services/AddressServices')

exports.postAddress = (req, res) => {
    console.log("Address endpoint hit");


    const { street, building, road, area, city, state, zip, contact, link } = req.body;

    const sql = `INSERT INTO address (street, building, road, area, city, state, zip, contact, link) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [street, building, road, area, city, state, zip, contact, link], (err, result) => {
        if (err) {
            console.error("Error inserting data: ", err);
            return res.status(500).json({ message: "Error inserting data", error: err });
        }

        res.status(200).json({ message: "Address added successfully", insertId: result.insertId });
    });
};

//get address
exports.getAddress = async(req, res) => {
    try {
        const data = await addressService.getAllAddress();
        console.log("data..", data);
        res.json(data); 
    } catch (err) {
        res.status(500).json({ err }); 
    }
};

//update Address
exports.updateAddress = (req, res) => {
    console.log("Address PUT endpoint hit");

    const id = req.params.id;

    const { street, building, road, area, city, state, zip, contact, link } = req.body;

    const sql = `UPDATE address
                 SET street = ?, building = ?, road = ?, area = ?, city = ?, state = ?, zip = ?, contact = ?, link = ?
                 WHERE id = ?`;

    db.query(sql, [street, building, road, area, city, state, zip, contact, link, id], (err, result) => {
        if (err) {
            console.error("Error updating data: ", err);
            return res.status(500).json({ message: "Error updating data", error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Address with ID ${id} not found` });
        }

        res.status(200).json({ message: "Address updated successfully" });
    });
};
//Delete Address
exports.deleteAddress = (req, res) => {
    console.log("Address DELETE endpoint hit");

    const id = req.params.id;

    const sql = `DELETE FROM address WHERE id = ?`;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting data: ", err);
            return res.status(500).json({ message: "Error deleting data", error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `Address with ID ${id} not found` });
        }

        res.status(200).json({ message: `Address with ID ${id} deleted successfully` });
    });
};
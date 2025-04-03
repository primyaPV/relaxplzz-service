const db = require('../../../utils/mysql');


exports.postBanner = (req, res) => {
    const { headline, subheading, purpose, example } = req.body;


    const query = 'INSERT INTO banners (headline, subheading, purpose, example)VALUES (?, ?, ?, ?)';


    db.query(query, [headline, subheading, purpose, example], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to insert banner data",
                error: err
            });
        }

        return res.status(201).json({
            message: "Banner created successfully",
            bannerId: result.insertId
        });
    });
};

//update 

exports.updateBanner = (req, res) => {
    const { headline, subheading, purpose, example } = req.body;
    const bannerId = req.params.id;


    const query = `
        UPDATE banners
        SET headline = ?, subheading = ?, purpose = ?, example = ?
        WHERE id = ?
    `;

    db.query(query, [headline, subheading, purpose, example, bannerId], (err, result) => {
        if (err) {
            console.error("Error updating banner data:", err);
            return res.status(500).json({
                message: "Failed to update banner data",
                error: err
            });
        }

        // Check if the banner exists (i.e., row was affected)
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Banner not found"
            });
        }

        // Success response
        return res.status(200).json({
            message: "Banner updated successfully",
            bannerId: bannerId
        });
    });
};

// deleteBanner
exports.deleteBanner = (req, res) => {
    const bannerId = req.params.id;

    const query = 'DELETE FROM banners WHERE id = ?';

    db.query(query, [bannerId], (err, result) => {
        if (err) {
            console.error("Error deleting banner:", err);
            return res.status(500).json({
                message: "Failed to delete banner data",
                error: err
            });
        }

        return res.status(200).json({
            message: "Banner deleted successfully",
            bannerId: bannerId
        });
    });
};
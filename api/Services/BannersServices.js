const db = require('../../utils/mysql');

// Service to create a new banner
exports.createBanner = (headline, subheading, purpose, example) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO banners (headline, subheading, purpose, example) VALUES (?, ?, ?, ?)';

        db.query(query, [headline, subheading, purpose, example], (err, result) => {
            if (err) {
                return reject({ message: "Failed to insert banner data", error: err });
            }
            resolve({ message: "Banner created successfully", bannerId: result.insertId });
        });
    });
};

// Service to update an existing banner
exports.updateBanner = (bannerId, headline, subheading, purpose, example) => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE banners
            SET headline = ?, subheading = ?, purpose = ?, example = ?
            WHERE id = ?
        `;

        db.query(query, [headline, subheading, purpose, example, bannerId], (err, result) => {
            if (err) {
                return reject({ message: "Failed to update banner data", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: "Banner not found" });
            }

            resolve({ message: "Banner updated successfully", bannerId });
        });
    });
};

// Service to delete a banner by ID
exports.deleteBanner = (bannerId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM banners WHERE id = ?';

        db.query(query, [bannerId], (err, result) => {
            if (err) {
                return reject({ message: "Failed to delete banner", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: "Banner not found" });
            }

            resolve({ message: "Banner deleted successfully", bannerId });
        });
    });
};
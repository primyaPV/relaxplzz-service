const db = require('../../utils/mysql');

exports.addGalleryItem = (mediaType, url) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO gallery (mediaType, url) VALUES (?, ?)`;

        db.query(sql, [mediaType, url], (err, result) => {
            if (err) {
                return reject({ message: "Error inserting gallery item", error: err });
            }
            resolve({ message: "Gallery item added successfully", insertId: result.insertId });
        });
    });
};

exports.updateGalleryItem = (id, mediaType, url) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE gallery SET mediaType = ?, url = ? WHERE id = ?`;

        db.query(sql, [mediaType, url, id], (err, result) => {
            if (err) {
                return reject({ message: "Error updating gallery item", error: err });
            }

            resolve({ message: "Gallery item updated successfully", affectedRows: result.affectedRows });
        });
    });
};

exports.deleteGalleryItem = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM gallery WHERE id = ?`;

        db.query(sql, [id], (err, result) => {
            if (err) {
                return reject({ message: "Error deleting gallery item", error: err });
            }

            if (result.affectedRows === 0) {
                return reject({ message: "Gallery item not found for the provided ID" });
            }

            resolve({ message: "Gallery item deleted successfully", id });
        });
    });
};
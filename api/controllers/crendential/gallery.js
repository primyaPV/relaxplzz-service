const db = require('../../../utils/mysql');

exports.postGallery = (req, res) => {
    const { mediaType, url } = req.body;

    const sql = `INSERT INTO gallery (mediaType,url) VALUES (?,?)`;
    db.query(sql, [mediaType, url], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "error", error: err })
        }

        res.status(200).json({
            message: "Gallery item added successfully",
            insertId: result.insertId,
        });
    })

}

exports.updateGallery = (req, res) => {
    const { mediaType, url } = req.body;
    const galleryId = req.params.id;

    const sql = `UPDATE gallery SET mediaType = ? , url = ? WHERE id = ?`;
    db.query(sql, [mediaType, url, galleryId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "error", error: err })
        }

        res.status(200).json({
            message: "Gallery item updated successfully",
            insertId: result.insertId,
        });
    })

}
exports.deleteGallery = () => {
    const { id } = req.params;

    const sql = `DELETE FROM gallery WHERE id=? `;
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error Deleting data", error: err });
        }
        return res.status(200).json({ message: "Data Deleted Successfully", id: id });
    });

}
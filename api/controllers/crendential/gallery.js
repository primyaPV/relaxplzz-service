const galleryService = require('../../Services/GalleryServices');

exports.postGallery = async(req, res) => {
    const { mediaType, url } = req.body;

    try {
        const result = await galleryService.addGalleryItem(mediaType, url);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error inserting gallery item: ", err);
        res.status(500).json({ message: "Error inserting gallery item", error: err });
    }
};

exports.updateGallery = async(req, res) => {
    const galleryId = req.params.id;
    const { mediaType, url } = req.body;

    try {
        const result = await galleryService.updateGalleryItem(galleryId, mediaType, url);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error updating gallery item: ", err);
        res.status(500).json({ message: "Error updating gallery item", error: err });
    }
};

exports.deleteGallery = async(req, res) => {
    const galleryId = req.params.id;

    try {
        const result = await galleryService.deleteGalleryItem(galleryId);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error deleting gallery item: ", err);
        res.status(500).json({ message: "Error deleting gallery item", error: err });
    }
};
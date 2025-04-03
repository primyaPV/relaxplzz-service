const bannersService = require('../../Services/BannersServices');

// POST Banner (Create new banner)
exports.postBanner = async(req, res) => {
    const { headline, subheading, purpose, example } = req.body;

    try {
        const result = await bannersService.createBanner(headline, subheading, purpose, example);
        res.status(201).json(result); // Successfully created
    } catch (err) {
        console.error("Error creating banner: ", err);
        res.status(500).json({ message: "Failed to insert banner data", error: err });
    }
};

// PUT Banner (Update banner by ID)
exports.updateBanner = async(req, res) => {
    const bannerId = req.params.id;
    const { headline, subheading, purpose, example } = req.body;

    try {
        const result = await bannersService.updateBanner(bannerId, headline, subheading, purpose, example);
        res.status(200).json(result); // Successfully updated
    } catch (err) {
        console.error("Error updating banner: ", err);
        res.status(500).json({ message: "Failed to update banner data", error: err });
    }
};

// DELETE Banner (Delete banner by ID)
exports.deleteBanner = async(req, res) => {
    const bannerId = req.params.id;

    try {
        const result = await bannersService.deleteBanner(bannerId);
        res.status(200).json(result); // Successfully deleted
    } catch (err) {
        console.error("Error deleting banner: ", err);
        res.status(500).json({ message: "Failed to delete banner data", error: err });
    }
};
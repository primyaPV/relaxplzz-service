const addressService = require('../../Services/AddressServices');

exports.postAddress = async(req, res) => {
    console.log("Address endpoint hit");

    const { street, building, road, area, city, state, zip, contact, link } = req.body;

    try {
        const result = await addressService.addAddress(street, building, road, area, city, state, zip, contact, link);
        res.status(200).json(result); // Successfully added
    } catch (err) {
        console.error("Error inserting data: ", err);
        res.status(500).json({ message: "Error inserting data", error: err });
    }
};

exports.getAddress = async(req, res) => {
    try {
        const data = await addressService.getAllAddress();
        console.log("data..", data);
        res.json(data);
    } catch (err) {
        console.error("Error fetching data: ", err);
        res.status(500).json({ message: "Error fetching data", error: err });
    }
};

exports.updateAddress = async(req, res) => {
    console.log("Address PUT endpoint hit");

    const id = req.params.id;
    const { street, building, road, area, city, state, zip, contact, link } = req.body;

    try {
        const result = await addressService.updateAddress(id, street, building, road, area, city, state, zip, contact, link);
        res.status(200).json(result); // Successfully updated
    } catch (err) {
        console.error("Error updating data: ", err);
        res.status(500).json({ message: "Error updating data", error: err });
    }
};

exports.deleteAddress = async(req, res) => {
    console.log("Address DELETE endpoint hit");

    const id = req.params.id;

    try {
        const result = await addressService.deleteAddress(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error deleting data: ", err);
        res.status(500).json({ message: "Error deleting data", error: err });
    }
};
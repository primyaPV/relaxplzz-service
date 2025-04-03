const enquiryService = require('../../Services/EnquirylistServices');

// POST Enquiry (Create new enquiry)
exports.postEnquiryList = async(req, res) => {
    const { Name, Email, PhoneNumber, Subject, Message } = req.body;

    try {
        const result = await enquiryService.createEnquiry(Name, Email, PhoneNumber, Subject, Message);
        res.status(200).json(result); // Successfully created
    } catch (err) {
        console.error("Error inserting enquiry: ", err);
        res.status(500).json({ message: "Error inserting data", error: err });
    }
};

// PUT Enquiry (Update enquiry by ID)
exports.updateEnquiryList = async(req, res) => {
    const { id, Name, Email, PhoneNumber, Subject, Message } = req.body;

    try {
        const result = await enquiryService.updateEnquiry(id, Name, Email, PhoneNumber, Subject, Message);
        res.status(200).json(result); // Successfully updated
    } catch (err) {
        console.error("Error updating enquiry: ", err);
        res.status(500).json({ message: "Error updating data", error: err });
    }
};

// DELETE Enquiry (Delete enquiry by ID)
exports.deleteEnquiryList = async(req, res) => {
    const id = req.params.id;

    try {
        const result = await enquiryService.deleteEnquiry(id);
        res.status(200).json(result); // Successfully deleted
    } catch (err) {
        console.error("Error deleting enquiry: ", err);
        res.status(500).json({ message: "Error deleting data", error: err });
    }
};
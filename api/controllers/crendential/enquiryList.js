const enquiryService = require('../../Services/EnquirylistServices');

exports.postEnquiryList = async(req, res) => {
    const { Name, Email, PhoneNumber, Subject, Message } = req.body;

    try {
        const result = await enquiryService.createEnquiry(Name, Email, PhoneNumber, Subject, Message);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error inserting enquiry: ", err);
        res.status(500).json({ message: "Error inserting data", error: err });
    }
};

exports.updateEnquiryList = async(req, res) => {
    const { id, Name, Email, PhoneNumber, Subject, Message } = req.body;

    try {
        const result = await enquiryService.updateEnquiry(id, Name, Email, PhoneNumber, Subject, Message);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error updating enquiry: ", err);
        res.status(500).json({ message: "Error updating data", error: err });
    }
};

exports.deleteEnquiryList = async(req, res) => {
    const id = req.params.id;

    try {
        const result = await enquiryService.deleteEnquiry(id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Error deleting enquiry: ", err);
        res.status(500).json({ message: "Error deleting data", error: err });
    }
};
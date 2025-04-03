const express = require('express');
const router = express.Router();
const enquiryListController = require('../controllers/crendential/enquiryList');

router.post('/postEnquiryList', enquiryListController.postEnquiryList);
router.put('/updateEnquiryList/:id', enquiryListController.updateEnquiryList);
router.delete('/deleteEnquiryList/:id', enquiryListController.deleteEnquiryList);


module.exports = router;
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/crendential/credentials')

//Address
router.post('/postAddress', addressController.postAddress);
router.get('/getAddress', addressController.getAddress);
router.put('/updateAddress/:id', addressController.updateAddress);
router.delete('/deleteAddress/:id', addressController.deleteAddress);


module.exports = router;
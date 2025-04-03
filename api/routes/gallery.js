const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/crendential/gallery')


router.post('/postGallery', galleryController.postGallery)
router.put('/updategallery/:id', galleryController.updateGallery)
    // router.delete('/deletegallery/:id', galleryController.deleteGallery)

module.exports = router;
const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/crendential/banners')

router.post('/postBanner', bannerController.postBanner)
router.put('/updateBanner/:id', bannerController.updateBanner)
router.delete('/deleteBanner/:id', bannerController.deleteBanner)


module.exports = router;
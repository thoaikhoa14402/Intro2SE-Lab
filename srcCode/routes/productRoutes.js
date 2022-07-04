const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// product handle
router.get('/get-products', productController.sendData);

module.exports = router;

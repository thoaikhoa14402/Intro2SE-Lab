const express = require('express');
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

const router = express.Router();

// get all users from DB
router.get('/get-all-users', adminController.getAllUsers);

module.exports = router;

const express = require('express');
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

const router = express.Router();

// get all users from DB
router.get('/get-all-users', adminController.getAllUsers);

// get user by email from DB
router.get('/get-user', adminController.getUser);

// create new user
router.post('/create-user', adminController.createUser);

// delete user
router.delete('/delete-user/:id', adminController.deleteUser);

// block user
router.patch('/block-user/:id', adminController.blockUser);

// update user
router.patch('/update-user/:id', adminController.updateUser);

module.exports = router;

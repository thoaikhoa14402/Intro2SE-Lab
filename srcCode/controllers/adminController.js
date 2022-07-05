const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const User = require('../models/userModel');
const crypto = require('crypto');
const sendEmail = require('../utilities/email');

// get all users
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
});



exports.signup =  (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  }
  res.status(201).json({
    status: 'success',
    message: 'Sign up successfully',
    newUser: newUser
  })
};



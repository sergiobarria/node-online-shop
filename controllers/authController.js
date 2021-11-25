const User = require('../models/userModel');

const getSignup = (req, res, next) => {
  res.render('customer/auth/signup');
};

const signup = async (req, res, next) => {
  const { email, password, fullname, street, postal, city } = req.body;

  const user = new User(email, password, fullname, street, postal, city);

  await user.signup();

  res.redirect('/login');
};

const getLogin = (req, res, next) => {
  res.render('customer/auth/login');
};

module.exports = {
  getSignup,
  getLogin,
  signup,
};

const getSignup = (req, res, next) => {
  res.render('customer/auth/signup')
};

const getLogin = (req, res, next) => {};

module.exports = {
  getSignup,
  getLogin,
};

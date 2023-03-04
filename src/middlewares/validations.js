const loginService = require('../services/login.service');

const validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
  const hasUser = await loginService.login(email, password);
  if (hasUser) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

module.exports = {
  validateLoginBody,
  validateEmail,
  validateDisplayName,
  validatePassword,
};

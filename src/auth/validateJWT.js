const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getUserById(decoded.data.userId);
    if (!user) {
      return res.status(401).json({
        message: 'Expired or invalid token',
      });
    }
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }

  next();
};

module.exports = {
  secret,
  jwtConfig,
  jwt,
  validateToken,
};
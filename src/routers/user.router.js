const express = require('express');
const userController = require('../controllers/user.controller');
const {
  validateEmail,
  validateDisplayName,
  validatePassword } = require('../middlewares/validations');

const router = express.Router();

router.post('/',
  validateEmail,
  validatePassword,
  validateDisplayName,
  userController.createUser);

module.exports = router;
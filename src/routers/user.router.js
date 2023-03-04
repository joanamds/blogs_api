const express = require('express');
const { validateToken } = require('../auth/validateJWT');
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

router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getUserById);
module.exports = router;
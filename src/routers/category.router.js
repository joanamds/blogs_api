const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', validateToken, categoryController.createCategory);

module.exports = router;
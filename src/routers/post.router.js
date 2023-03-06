const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../auth/validateJWT');
const { validateNewPost } = require('../middlewares/validations');

const router = express.Router();

router.post('/', validateToken, validateNewPost, postController.createPost);

module.exports = router;
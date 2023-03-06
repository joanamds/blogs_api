const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../auth/validateJWT');
const { validateNewPost, validateUpdate } = require('../middlewares/validations');

const router = express.Router();

router.put('/:id', validateToken, validateUpdate, postController.updatePost);
router.post('/', validateToken, validateNewPost, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostWithId);
module.exports = router;
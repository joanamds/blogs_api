const postService = require('../services/post.service');
const { jwt, secret } = require('../auth/validateJWT');

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const decodedToken = jwt.verify(authorization, secret);
  const id = decodedToken.data.userId;
  const response = await postService.createPost(title, content, categoryIds, id);

  return res.status(201).json(response);
};

const getAllPosts = async (_req, res) => {
  const allPosts = await postService.getAllPosts();

  return res.status(200).json(allPosts);
};

module.exports = {
  createPost,
  getAllPosts,
};

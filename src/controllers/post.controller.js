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

const getPostWithId = async (req, res) => {
  const { id } = req.params;
  const getPost = await postService.getPostWithId(id);

  if (!getPost) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }

  return res.status(200).json(getPost);
};

const updatePost = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const { title, content } = req.body;
  const decodedToken = jwt.verify(authorization, secret);
  const { userId } = decodedToken.data;
  const getPost = await postService.getPostWithId(id);
  if (getPost.dataValues.userId !== userId) {
    return res.status(401).send({
      message: 'Unauthorized user',
    });
  }
  
  const updatedPost = await postService.updatePost(id, title, content);

  return res.status(200).json(updatedPost);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostWithId,
  updatePost,
};

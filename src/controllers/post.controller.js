const postService = require('../services/post.service');
const { decodedToken } = require('../auth/validateJWT');

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const getId = decodedToken(authorization);
  const response = await postService.createPost(title, content, categoryIds, getId);

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
  const getId = decodedToken(authorization);
  const getPost = await postService.getPostWithId(id);
  if (getPost.dataValues.userId !== getId) {
    return res.status(401).send({
      message: 'Unauthorized user',
    });
  }
  
  const updatedPost = await postService.updatePost(id, title, content);

  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const getId = decodedToken(authorization);
  const findPost = await postService.getPostWithId(id);
  if (!findPost) {
    return res.status(404).send({
      message: 'Post does not exist',
    });
  }
  if (findPost.dataValues.userId !== getId) {
    return res.status(401).send({
      message: 'Unauthorized user',
    });
  }

  return res.status(204).send();
};

module.exports = {
  createPost,
  getAllPosts,
  getPostWithId,
  updatePost,
  deletePost,
};

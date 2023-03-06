const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: Date.now(),
    published: Date.now(),
  });

  const postCategories = categoryIds.map((categoryId) => ({ categoryId, postId: newPost.id }));
  await PostCategory.bulkCreate(postCategories);

  return newPost;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: ['postId', 'categoryId'] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  getAllPosts,
};

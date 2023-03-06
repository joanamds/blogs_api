const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  createPost,
};

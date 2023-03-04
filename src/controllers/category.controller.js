const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({
      message: '"name" is required',
    });
  }
  const newCategory = await categoryService.createCategory(name);

  return res.status(201).send(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};

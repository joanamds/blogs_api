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

module.exports = {
  createCategory,
};

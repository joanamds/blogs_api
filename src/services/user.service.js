const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getUserById = async (id) => {
  const user = User.findByPk(id);
  return user;
};

module.exports = {
  getUserById,
  createUser,
};

const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

const deleteUser = async (userId) => {
  await User.destroy({
    where: { id: userId },
  });
};

module.exports = {
  getUserById,
  createUser,
  getUsers,
  deleteUser,
};

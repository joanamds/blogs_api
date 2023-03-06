const userService = require('../services/user.service');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.createUser(displayName, email, password, image);
  const newUserId = response.dataValues.id;

  if (response.type) {
    return res.status(409).send({ message: response.message });
  }

  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

  return res.status(201).send({ token });
};

const getUsers = async (_req, res) => {
  const allUsers = await userService.getUsers();

  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }

  return res.status(200).json(user);
};

// const deleteUser = async (req, res) => {
//   const { authorization } = req.headers;
//   const getUserId = decodedToken(authorization);
//   const 
// }

module.exports = {
  createUser,
  getUsers,
  getUserById,
  // deleteUser,
};

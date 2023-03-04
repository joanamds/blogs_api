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

module.exports = {
  createUser,
};

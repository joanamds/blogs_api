const loginService = require('../services/login.service');
const { jwt, secret, jwtConfig } = require('../auth/validateJWT');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.login(email, password);
  if (!user) {
    return res.status(400).send({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).send({ token });
};

module.exports = {
  login,
};

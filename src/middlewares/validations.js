const validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = {
  validateLoginBody,
};

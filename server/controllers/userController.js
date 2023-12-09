const User = require("../models/userSchema");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signUp,
};

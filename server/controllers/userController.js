const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Hash Password
    const hashPassword = bcrypt.hashSync(password, 8);

    const user = await User.create({
      email,
      password: hashPassword,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //   Find User
    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    //   Compare password with bcrypt
    const passMatch = bcrypt.compareSync(password, user.password);
    if (!passMatch) return res.sendStatus(401);

    // create Token and expire token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    //   set cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
const logout = async (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  signUp,
  login,
  logout,
};

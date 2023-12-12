const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const requireAuth = async (req, res, next) => {
  try {
    // get token of cookie
    const token = req.cookies.Authorization;

    //   decode the token
    const decode = jwt.verify(token, process.env.SECRET);
    if (Date.now() > decode.exp) return res.sendStatus(401);

    //   Find User by decode.sub
    const user = await User.findById(decode.sub);
    if (!user) return res.sendStatus(401);

    //attach user to request
    req.user = user;

    next();
  } catch (err) {
    res.sendStatus(401);
    console.log(err);
  }
};

module.exports = requireAuth;

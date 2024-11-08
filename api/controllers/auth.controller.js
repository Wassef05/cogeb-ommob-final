const bcrypt = require("bcrypt");
const User = require("../models/user.models.js");
const { throwError } = require("../utils/error.js");
const jwt = require("jsonwebtoken");
const { passwordGenarator, usernameGenarator } = require("../utils/helper.js");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, userPassword } = req.body;
  try {
    if (!email || !userPassword) {
      return next(throwError(400, "Email and password are required"));
    } 
    const validUser = await User.findOne({ email });
    if (!validUser || !bcrypt.compareSync(userPassword, validUser.password)) {
      return next(throwError(401, "Wrong Credentials!"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "720h" });
    const { password, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const googleSignIn = async (req, res, next) => {
  const { email, name, photo } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      const hashedPassword = bcrypt.hashSync(passwordGenarator(), 10);
      user = new User({
        name,
        username: usernameGenarator(name),
        email,
        password: hashedPassword,
        avatar: photo,
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "720h" });
    const { password, ...rest } = user._doc;

    res
      .cookie("access_token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User logged out successfully!");
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin, googleSignIn, signOut };

const User = require("../models/user.models.js");
const { throwError } = require("../utils/error.js");
const bcrypt = require("bcrypt");
const Projects = require("../models/project.model.js");

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(throwError(404, "User not found"));

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(throwError(404, error.message));
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    next(throwError(404, error.message));
  }
};

const updateUser = async (req, res, next) => {
  const { email, username } = req.body;

  try {
    if (await User.findOne({ email })) return next(throwError(400, "Email already exists"));
    if (await User.findOne({ username })) return next(throwError(400, "Username already exists"));

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(throwError(error));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User deleted successfully!");
  } catch (error) {
    next(error);
  }
};

const userProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find({ userRef: req.params.id });
    res.status(200).json(projects);
  } catch (error) {
    next(throwError(404, error.message));
  }
};

module.exports = { getUser, getAllUsers, updateUser, deleteUser, userProjects };


const express = require("express");
const { deleteUser, updateUser, getUser, userProjects, getAllUsers } = require("../controllers/user.controller");
const { verifyToken, verifyAdmin } = require("../utils/varifyUser");

const router = express.Router();

router.get("/:id", getUser);
router.get("/projects/:id", userProjects);
router.get("/", getAllUsers);
router.post("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;


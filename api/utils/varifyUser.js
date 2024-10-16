
const jwt = require("jsonwebtoken");
const { throwError } = require("./error.js");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(throwError(401, "Session End. Login Again! "));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(throwError(403, "Forbidden"));
    req.user = user;
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return next(throwError(403, "Admin access required"));
    }
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
};

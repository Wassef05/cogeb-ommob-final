const express = require("express");
const {
  googleSignIn,
  signOut,
  signin,
  signup,  
} = require("../controllers/auth.controller"); 

const router = express.Router();

router.post("/signup", signup); 
router.post("/signin", signin);
router.post("/google", googleSignIn);
router.get("/signout", signOut);

module.exports = router; 


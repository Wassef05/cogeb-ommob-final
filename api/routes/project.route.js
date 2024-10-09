const express = require("express");
const { verifyToken, verifyAdmin } = require("../utils/varifyUser");
const { 
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
    singleProject,
    getListingProjects,
    getNumberProjects,
    getNumberParkingProjects,
} = require("../controllers/project.controller");

const router = express.Router();

router.get("/countParking", getNumberParkingProjects);
router.get("/count", getNumberProjects);
router.post("/", createProject); 
router.get("/search", getListingProjects);
router.put("/:id", updateProject); 
router.delete("/:id", deleteProject); 
router.get("/:id", singleProject); 
router.get("/", getAllProjects); 

module.exports = router;

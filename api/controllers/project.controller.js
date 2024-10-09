const Projects = require("../models/project.model.js");
const { throwError } = require("../utils/error.js");
const createProject = async (req, res, next) => {
  try {
    const project = await Projects.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};
const deleteProject = async (req, res, next) => {
  try {
    const isProjectExist = await Projects.findById(req.params.id);
    if (!isProjectExist) return next(throwError(404, "Project not found"));

    await Projects.findByIdAndDelete(req.params.id);
    res.status(200).json("Project deleted successfully");
  } catch (error) {
    next(error);
  }
};
const updateProject = async (req, res, next) => {
  try {
    const isProjectExist = await Projects.findById(req.params.id);
    if (!isProjectExist) return next(throwError(404, "Project not found"));

    const updatedProject = await Projects.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
};
const singleProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) return next(throwError(404, "Project not found"));
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};
const getListingProjects = async (req, res, next) => {
  try {
    const { searchTerm = "", etat = "", parking, furnished, bureau, page = 1 } = req.query;

    const query = {
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { address: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    };

    if (etat !== "all") query.etat = etat;
    if (parking === "true") query.parking = true;
    if (furnished === "true") query.furnished = true;
    if (bureau === "true") query.bureau = true;

    const limit = 12;
    const skip = (page - 1) * limit;

    const projects = await Projects.find(query).skip(skip).limit(limit);
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};
const getNumberProjects = async (req, res) => {
  try {
    const count = await Projects.countDocuments();
    res.json({ count });
  } catch (error) {
    next(error);
  }
};
const getNumberParkingProjects = async (req, res) => {
  try {
    const count = await Projects.countDocuments({ parking: true });
    res.json({ count });
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  createProject, 
  deleteProject, 
  updateProject, 
  singleProject, 
  getListingProjects, 
  getAllProjects, 
  getNumberProjects, 
  getNumberParkingProjects 
};

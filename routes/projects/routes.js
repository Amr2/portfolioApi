const express = require("express");
const projectsRouter = express.Router();
const {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("./controller");

projectsRouter.route("/").get(getAllProjects).post(createProject);
projectsRouter
  .route("/:id")
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = projectsRouter;

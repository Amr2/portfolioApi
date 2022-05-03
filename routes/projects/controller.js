const asyncHandler = require("express-async-handler");
// @desc POST a new Project
// @route POST /api/Projects/
// @access Private
const createProject = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("no name");
  }
  res.status(200).json({
    message: `creating a new Project`,
  });
});

// @desc Get all Projects
// @route GET /api/Projects
// @access Private
const getAllProjects = asyncHandler(async (req, res) => {
  return res.json({
    message: "all Projects",
  });
});

// @desc Get a single Project
// @route GET /api/Projects/:id
// @access Private
const getProject = asyncHandler(async (req, res) => {
  return res.json({
    message: `Project's id is ${req.params.id}`,
  });
});

// @desc Update a single Project
// @route Update /api/Projects/:id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  return res.json({
    message: `updateing Project with ${req.params.id} id`,
  });
});

// @desc Delete a single Project
// @route Delete /api/Projects/:id
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  return res.json({
    message: `deleting Project with ${req.params.id} id`,
  });
});

module.exports = {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};

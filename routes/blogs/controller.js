const asyncHandler = require("express-async-handler");

// @desc Create a new blog
// @route Create /api/blogs/
// @access Private
const createBlog = asyncHandler(async (req, res) => {
  return res.json({
    message: `creating a new blog`,
  });
});

// @desc Get all blogs
// @route GET /api/blogs
// @access Private
const getAllBlogs = asyncHandler(async (req, res) => {
  return res.json({
    message: "all blogs",
  });
});

// @desc Get a single blog
// @route GET /api/blogs/:id
// @access Private
const getBlog = asyncHandler(async (req, res) => {
  return res.json({
    message: `blog's id is ${req.params.id}`,
  });
});

// @desc Update a single blog
// @route Update /api/blogs/:id
// @access Private
const updateBlog = asyncHandler(async (req, res) => {
  return res.json({
    message: `updateing blog with ${req.params.id} id`,
  });
});

// @desc Delete a single blog
// @route Delete /api/blogs/:id
// @access Private
const deleteBlog = asyncHandler(async (req, res) => {
  return res.json({
    message: `deleting blog with ${req.params.id} id`,
  });
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};

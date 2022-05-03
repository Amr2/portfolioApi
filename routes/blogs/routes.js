const express = require("express");
const blogsRouter = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("./controller");

blogsRouter.route("/").get(getAllBlogs).post(createBlog);
blogsRouter.route("/:id").get(getBlog).put(updateBlog).delete(deleteBlog);

module.exports = blogsRouter;

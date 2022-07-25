const express = require("express");
const {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  getBlog,
} = require("../controllers/blogControllers");

const blogsRouter = express.Router();

// get all blogs
blogsRouter.get("/", getBlogs);

// get single blog
blogsRouter.get("/:id", getBlog);

// create blog
blogsRouter.post("/", createBlog);

// delete blog
blogsRouter.delete("/:id", deleteBlog);

// edit blog
blogsRouter.patch("/:id", updateBlog);

module.exports = blogsRouter;

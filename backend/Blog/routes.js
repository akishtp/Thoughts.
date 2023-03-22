const express = require("express");
const { getBlogs, createBlog } = require("./controllers");

const blogRoutes = express.Router();

// get all blogs
blogRoutes.get("/", getBlogs);

// // get single blog
// blogsRouter.get("/:id", getBlog);

// // create blog
blogRoutes.post("/", createBlog);

// // delete blog
// blogsRouter.delete("/:id", deleteBlog);

// // edit blog
// blogsRouter.patch("/:id", updateBlog);

module.exports = blogRoutes;

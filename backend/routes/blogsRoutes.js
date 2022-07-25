const express = require("express");

const blogsRouter = express.Router();

// get all blogs
blogsRouter.get("/", (req, res) => {
  res.json({ msg: "get all blogs" });
});

// get single blog
blogsRouter.get("/:id", (req, res) => {
  res.json({ msg: "get a blog" });
});

// create blog
blogsRouter.post("/", (req, res) => {
  res.json({ msg: "creating a blog" });
});

// delete blog
blogsRouter.delete("/:id", (req, res) => {
  res.json({ msg: "delete a blog" });
});

// edit blog
blogsRouter.patch("/:id", (req, res) => {
  res.json({ msg: "update a blog" });
});

module.exports = blogsRouter;

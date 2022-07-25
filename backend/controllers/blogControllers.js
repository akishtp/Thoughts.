const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

// get single blog
const getBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }
  res.status(200).json(blog);
};

// create blog
const createBlog = async (req, res) => {
  const { title, tag, body } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!body) {
    emptyFields.push("body");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to DB
  try {
    const blog = await Blog.create({ title, tag, body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }
  const blog = await Blog.findOneAndDelete({ _id: id });
  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }
  res.status(200).json(blog);
};

// edit blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }
  const blog = await Blog.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }
  res.status(200).json(blog);
};

module.exports = { getBlogs, getBlog, createBlog, deleteBlog, updateBlog };

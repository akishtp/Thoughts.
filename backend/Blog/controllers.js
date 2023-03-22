const Blog = require("./model");
const mongoose = require("mongoose");

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

const createBlog = async (req, res) => {
  const { title, tag, body } = req.body;

  if (!title || !body) {
    throw Error("Fill all fields pls 🥺👉👈");
  }

  // add to DB
  try {
    const blog = await Blog.create({ title, tag, body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBlogs, createBlog };

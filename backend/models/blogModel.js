const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  intro: { type: String },
  body: { type: String, required: true },
});

module.exports = mongoose.model("Blog", blogSchema);

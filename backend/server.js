// imports
const express = require("express");
const blogsRouter = require("./routes/blogsRoutes");

// dotenv config
require("dotenv").config();

// create express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/blogs", blogsRouter);

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`PORT${PORT} served`);
});

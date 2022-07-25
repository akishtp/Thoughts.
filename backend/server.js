// imports
const express = require("express");
const { default: mongoose } = require("mongoose");
const blogsRouter = require("./routes/blogsRoutes");

// dotenv config
require("dotenv").config();

// create express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/blogs", blogsRouter);

// connect to DB
mongoose
  .connect(process.env.MONGO_URI2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen to port
    PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Connected to DB & Listening to port${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const colors = require("colors");
const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
// needed routes
const blogsRouter = require("./routes/blogs/routes");
const projectsRouter = require("./routes/projects/routes");
// needed middleware
const { errorsHandler } = require("./middlewares/errorMiddlewares");
// connected to DB
connectDB();

const app = express();

const port = process.env.PORT || 9000;
// app config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes
app.use("/api/blogs", blogsRouter);
app.use("/api/projects", projectsRouter);
// middlewares
app.use(errorsHandler);
// init server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// require dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const songRouter = require('./controllers/songsController.js');


// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use('/', songRouter);

// connect to mongo
mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to MongoDB');
});

// error and success
const db = mongoose.connection;
db.on("error", (err) => console.log(`${err.message} MongoDB is not running`));
db.on("connected", () => console.log("Mongo connected"));
db.on("disconnected", () => console.log("Mongo disconnected"));

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectMonogodb = require("./init/mongodb");
const todoRoutes = require("./routes/todo");
const dotenv = require("dotenv");

//envirnment variable

dotenv.config();

//init app
const app = express();

// connect mongodb

connectMonogodb();

 

//set view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", todoRoutes);

module.exports = app;

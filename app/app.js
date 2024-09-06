"use strict";

const express = require("express");
const home = require("./src/routes/home");
const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;

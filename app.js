const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./api/routes/users");
const patientRoutes = require("./api/routes/patients");

//Middleware
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
module.exports = app;

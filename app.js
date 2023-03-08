import express from "express";
const app = express();
// require("dotenv").config();
import userRoutes from "./api/routes/users.js";
import patientRoutes from "./api/routes/patients.js";

//Middleware
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
export default app;

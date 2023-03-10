import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import morgan from "morgan";

import userRoutes from "./api/routes/users.js";
import patientRoutes from "./api/routes/patients.js";

app.use(morgan("dev"));

//Routes used to handle the requests
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);

app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
export default app;

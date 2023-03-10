import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors"

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
//     return res.status(200).json({});
//   }
//   next();
// });

import userRoutes from "./api/routes/users.js";
import patientRoutes from "./api/routes/patients.js";
import doctorsRoutes from "./api/routes/doctors.js";

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Routes used to handle the requests
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
app.use("/doctors", doctorsRoutes);

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

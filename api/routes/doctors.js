import { Router } from "express";
import {
  deleteDoctor,
  getDoctor,
  getDoctors,
  patchDoctor,
  postDoctor,
} from "../../controllers/doctorsController.js";
const router = Router();

//Get list of doctors
router.get("/", getDoctors);

//Create list of doctors
router.post("/", postDoctor);

//Individual doctors with ID
router.get("/:doctorId", getDoctor);

router.patch("/:doctorId", patchDoctor);

router.delete("/:doctorId", deleteDoctor);

export default router;

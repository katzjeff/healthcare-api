import { Router } from "express";
import {
  deletePatient,
  getPatient,
  getPatients,
  patchPatient,
  postPatient,
} from "../../controllers/patientsController.js";


const router = Router();

//Get list of patients
router.get("/", getPatients);

//Create list of patients
router.post("/", postPatient);

//Individual patients with ID
router.get("/:patientId", getPatient);

router.patch("/:patientId", patchPatient);

router.delete("/:patientId", deletePatient);

export default router;

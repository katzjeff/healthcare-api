import { Router } from "express";
const router = Router();

//Get list of doctors
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Showing list of doctors",
  });
});

//Create list of doctors
router.post("/", (req, res, next) => {
  const doctor = {
    doctorName: req.body.doctorName,
    email: req.body.email,
    telephone: req.body.telephone,
  }

  res.status(201).json({
    message: "Created doctor",
    createdPatient: doctor
  });
});

//Individual doctors with ID
router.get("/:doctorId", (req, res, next) => {
    const id = req.params.doctorId
  if (id === "great") {
    res.status(201).json({
      message: "You hit the jackpot",
      id: id
    });
  } else {
    res.status(201).json({
      message: "Sorry you missed out",
    });
  }
});

router.patch("/:doctorId", (req, res, next) => {
    res.status(200).json({
      message: "Updated user details",
    });
  });
  
  router.delete("/:doctorId", (req, res, next) => {
    res.status(200).json({
      message: "Deleted doctor details",
    });
  });

export default router;

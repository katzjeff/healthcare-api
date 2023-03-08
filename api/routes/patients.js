const express = require("express");
const router = express.Router();

//Get list of patients
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Showing list of patients",
  });
});

//Create list of patients
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Creating patient",
  });
});

//Individual patients with ID
router.get("/:patientId", (req, res, next) => {
    const id = req.params.patientId
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

router.patch("/:patientId", (req, res, next) => {
    res.status(200).json({
      message: "Updated user details",
    });
  });
  
  router.delete("/:patientId", (req, res, next) => {
    res.status(200).json({
      message: "Deleted patient details",
    });
  });

module.exports = router;

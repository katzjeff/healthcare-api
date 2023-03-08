const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET Users ",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST/Create Users ",
  });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  if (id === "great") {
    res.status(200).json({
      message: "You hit the jackpot",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Sorry you missed out",
    });
  }
});

router.patch("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "Updated user details",
  });
});

router.delete("/:userId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted user details",
  });
});

module.exports = router;

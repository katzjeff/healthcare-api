export const getDoctors = (req, res, next) => {
  res.status(200).json({
    message: "Showing list of doctors",
  });
};

export const postDoctor = (req, res, next) => {
  const doctor = {
    doctorName: req.body.doctorName,
    email: req.body.email,
    telephone: req.body.telephone,
  };

  res.status(201).json({
    message: "Created doctor",
    createdPatient: doctor,
  });
};

export const getDoctor = (req, res, next) => {
  const id = req.params.doctorId;
  if (id === "great") {
    res.status(201).json({
      message: "You hit the jackpot",
      id: id,
    });
  } else {
    res.status(201).json({
      message: "Sorry you missed out",
    });
  }
};

export const patchDoctor = (req, res, next) => {
  res.status(200).json({
    message: "Updated user details",
  });
};

export const deleteDoctor = (req, res, next) => {
  res.status(200).json({
    message: "Deleted doctor details",
  });
};

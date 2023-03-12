export const getPatients = (req, res, next) => {
  res.status(200).json({
    message: "Showing list of patients",
  });
};

export const postPatient = (req, res, next) => {
  const patient = {
    patientName: req.body.patientName,
    age: req.body.age,
    gender: req.body.gender,
  };

  res.status(201).json({
    message: "Created patient",
    createdPatient: patient,
  });
};

export const getPatient = (req, res, next) => {
  const id = req.params.patientId;
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

export const patchPatient = (req, res, next) => {
  res.status(200).json({
    message: "Updated user details",
  });
};

export const deletePatient = (req, res, next) => {
  res.status(200).json({
    message: "Deleted patient details",
  });
};

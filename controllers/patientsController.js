import mongoose from "mongoose";
import Patients from "../models/patientsModel.js";

export const getPatients = (req, res, next) => {
  Patients.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({
          message: "No Entries found, please create a new patient",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const postPatient = (req, res, next) => {
  const patient = Patients({
    _id: new mongoose.Types.ObjectId(),
    patientName: req.body.patientName,
    age: req.body.age,
    gender: req.body.gender,
  });

  patient
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created patient",
        createdPatient: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const getPatient = (req, res, next) => {
  const id = req.params.patientId;
  Patients.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(400).json({
          message: "No valid user provided for id " + id,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export const patchPatient = (req, res, next) => {
  // res.status(200).json({
  //   message: "Updated user details",
  // });
  // const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  
  Patients.findByIdAndUpdate(
    { _id: req.params.patientId },
    {
      $set: {
        // updateOps,
        patientName: req.body.patientName,
        age: req.body.age,
        gender: req.body.gender
      },
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        result,
        message: "Patient has been updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export const deletePatient = (req, res, next) => {
  const id = req.params.patientId;
  Patients.findByIdAndRemove({ _id: req.params.patientId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Patient with id " + id + " has been deleted!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

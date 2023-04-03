import mongoose from "mongoose";
import Patients from "../models/patientsModel.js";

export const getPatients = (req, res, next) => {
  Patients.find()
    .select("patientName age gender _id")
    .exec()
    .then((patients) => {
      const response = {
        count: patients.length,
        patients: patients.map(patients => {
          return {
            patientName: patients.name,
            age: patients.age,
            gender: patients.gender,
            _id: patients._id,
            request: {
              type: "GET",
              url: "http://localhost:4000/patients/" + patients._id
            }

          }
        })
      };
      // if (docs.length >= 0) {
      res.status(200).json({
        response,
        patients,
      });
      // } else {
      //   res.status(404).json({
      //     message: "No Entries found, please create a new patient",
      //   });
      // }
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
        createdPatient: {
          patientName: result.patientName,
          age: result.age,
          gender: result.gender,
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:4000/patients/" + result._id
          }
        }
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
    .select('patientName age gender _id')
    .exec()
    .then((patient) => {
      console.log(patient);
      if (patient) {
        res.status(200).json({
          patient: patient,
          request: {
            type: "GET",
            description: "Get list of all other patients using the link below",
            url: "http://localhost:4000/patients"
          }
        });
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
        gender: req.body.gender,
      },
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Patient has been updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/patients/" + id
        }
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

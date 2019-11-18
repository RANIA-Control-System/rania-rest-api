const Patient = require("../models/patient.model.js");
//For all these functions, req stands for request and res stands for result

// Create and Save a new patient
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Patient content can not be empty"
    });
  }

  // Create a Patient
  const patient = new Patient({
    name: {
      firstName: req.body.firstName,
      middleInitial: req.body.middleInitial,
      lastName: req.body.lastName
    },
    birthDate: req.body.birthDate,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    maritalStatus: req.body.maritalStatus
  });

  // Save Patient in the database
  patient
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient."
      });
    });
};

// Retrieve and return all patients from the database.
exports.findAll = (req, res) => {
  console.log("fetching patients");

  Patient.find()
    .then(patients => {
      res.send(patients);
      console.log(patients);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving patients."
      });
    });
};

// Find a single patient with a patientId
exports.findOne = (req, res) => {
  Patient.findById(req.params.patientId)
    .then(patient => {
      if (!patient) {
        return res.status(404).send({
          message: "Patient not found with id " + req.params.patientId
        });
      }
      res.send(patient);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Patient not found with id " + req.params.patientId
        });
      }
      return res.status(500).send({
        message: "Error retrieving patient with id " + req.params.patientId
      });
    });
};

// Update a patient patient by the patientId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Patient content can not be empty"
    });
  }

  // Find patient and update it with the request body
  Patient.findByIdAndUpdate(
    req.params.patientId,
    {
      name: {
        firstName: req.body.firstName,
        middleInitial: req.body.middleInitial,
        lastName: req.body.lastName
      },
      birthDate: req.body.birthDate,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      maritalStatus: req.body.maritalStatus
    },
    { new: true }
  )
    .then(patient => {
      if (!patient) {
        return res.status(404).send({
          message: "Patient not found with id " + req.params.patientId
        });
      }
      res.send(patient);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "patient not found with id " + req.params.patientId
        });
      }
      return res.status(500).send({
        message: "Error updating patient with id " + req.params.patientId
      });
    });
};

// Delete a patient with the specified patientId in the request
exports.delete = (req, res) => {
  Patient.findByIdAndRemove(req.params.patientId)
    .then(patient => {
      if (!patient) {
        return res.status(404).send({
          message: "Patient not found with id " + req.params.patientId
        });
      }
      res.send({ message: "Patient deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Patient not found with id " + req.params.patientId
        });
      }
      return res.status(500).send({
        message: "Could not delete patient with id " + req.params.patientId
      });
    });
};

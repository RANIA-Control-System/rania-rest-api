const Patient = require("../models/patient.model.js");
//For all thesse functions, req stands for request and res stands for result

// Create and Save a new patient
exports.create = (req, res) => {
  //@TODO
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
  //@TODO
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

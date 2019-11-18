const Patient = require("../models/patient.model.js");

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
  //@TODO
};

// Update a patient patient by the patientId in the request
exports.update = (req, res) => {
  //@TODO
};

// Delete a patient with the specified patientId in the request
exports.delete = (req, res) => {
  //@TODO
};

const Patient = require("../models/patient.model.js");

// Create and Save a new Note
exports.create = (req, res) => {};

// Retrieve and return all notes from the database.
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

// Find a single note with a noteId
exports.findOne = (req, res) => {};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {};

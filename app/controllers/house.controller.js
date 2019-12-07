const House = require("../models/house.model.js");
//For all these functions, req stands for request and res stands for result

// Create and Save a new house
exports.create = (req, res) => {
  /**
   * WORK IN PROGRESS
   */
};

// Retrieve and return all houses from the database from patient Id.
exports.findAllForPatient = (req, res) => {
  console.log("fetching house for patient " + req.params.patientId);

  House.find({ patientId: req.params.patientId })
    .then(house => {
      res.send(house);
      console.log(house);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving House."
      });
    });
};

// Find a single house with a houseId
exports.findOne = (req, res) => {
  /**
   * WORK IN PROGRESS
   */
};

// Update a House by the houseId in the request
exports.update = (req, res) => {
  /**
   * WORK IN PROGRESS
   */
};

// Delete a house with the specified houseId in the request
exports.delete = (req, res) => {
  /**
   * WORK IN PROGRESS
   */
};

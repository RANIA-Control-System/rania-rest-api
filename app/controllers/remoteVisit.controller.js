const RemoteVisit = require("../models/remoteVisit.model.js");
//For all these functions, req stands for request and res stands for result

// Create and Save a new remote visit
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Remote Visit content can not be empty"
    });
  }

  // Create a Visit
  const visit = new RemoteVisit({
    patientId: req.body.patientId,
    date: req.body.date,
    startTime: req.body.startTime,
    length: req.body.duration, //NOTE: REQ.BODY.DURATION INSTEAD OF LENGTH
    doctor: req.body.doctor,
    type: req.body.type,
    formId: req.body.formId,
    notes: req.body.notes
  });

  // Save Visit in the database
  visit
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Remote Visit."
      });
    });
};

// Retrieve and return all remote visits from the database from patient Id.
exports.findAllForPatient = (req, res) => {
  console.log("fetching remote visit for patient " + req.params.patientId);

  RemoteVisit.find({ patientId: req.params.patientId })
    .then(visits => {
      res.send(visits);
      console.log(visits);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Remote Visits."
      });
    });
};

// Find a single remote visit with a remoteVisitId
exports.findOne = (req, res) => {
  RemoteVisit.findById(req.params.remoteVisitId)
    .then(visit => {
      if (!visit) {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      res.send(visit);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      return res.status(500).send({
        message: "Error retrieving visit with id " + req.params.remoteVisitId
      });
    });
};

// Update a Remote Visit by the remoteVisitId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Remote Visit content can not be empty"
    });
  }

  // Find Remote Visit and update it with the request body
  RemoteVisit.findByIdAndUpdate(
    req.params.remoteVisitId,
    {
      patientId: req.body.patientId,
      date: req.body.date,
      startTime: req.body.startTime,
      length: req.body.duration, //NOTE: REQ.BODY.DURATION INSTEAD OF LENGTH
      doctor: req.body.doctor,
      type: req.body.type,
      formId: req.body.formId,
      notes: req.body.notes
    },
    { new: true }
  )
    .then(visit => {
      if (!visit) {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      res.send(visit);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      return res.status(500).send({
        message:
          "Error updating Remote Visit with id " + req.params.remoteVisitId
      });
    });
};

// Delete a vist with the specified patientId in the request
exports.delete = (req, res) => {
  RemoteVisit.findByIdAndRemove(req.params.remoteVisitId)
    .then(visit => {
      if (!visit) {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      res.send({ message: "Remote Visit deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Remote Visit not found with id " + req.params.remoteVisitId
        });
      }
      return res.status(500).send({
        message:
          "Could not delete Remote Visit with id " + req.params.remoteVisitId
      });
    });
};

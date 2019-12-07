module.exports = app => {
  const remoteVisits = require("../controllers/remoteVisit.controller.js");

  //These can all be accessed at http://159.65.238.119:3000/ROUTE while
  //the node server is running or http://localhost:3000/ROUTE when running locally
  // Create a new Remote Visit
  app.post("/remoteVisits", remoteVisits.create);

  // Retrieve all Remote Visits of a patient using patientId
  app.get("/remoteVisits/:patientId", remoteVisits.findAllForPatient);

  // Retrieve a single Remote Visit with remoteVisitId
  app.get("/remoteVisits/:remoteVisitId", remoteVisits.findOne);

  // Update a Remote Visit with remoteVisitId
  app.put("/remoteVisit/:remoteVisitId", remoteVisits.update);

  // Delete a Remote Visit with remoteVisitId
  app.delete("/remoteVisit/:remoteVisitId", remoteVisits.delete);
};

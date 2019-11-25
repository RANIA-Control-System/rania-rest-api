module.exports = app => {
  const remoteVisits = require("../controllers/remoteVisit.controller.js");

  //These can all be accessed at localhost:3000/ROUTE while the node server is running
  // Create a new Remote Visit
  app.post("/remoteVisits", remoteVisits.create);

  // Retrieve all Remote Visits of a patient using patientId
  app.get("/remoteVisits/:patientId", remoteVisits.findAllForPatient);

  // Retrieve a single Remote Visit with remotevisitId
  app.get("/remoteVisits/:RemoteVisitId", remoteVisits.findOne);

  // Update a Remote Visit with remoteVisitId
  app.put("/remoteVisit/:remoteVisitId", remoteVisits.update);

  // Delete a Remote Visit with remoteVisit
  app.delete("/remoteVisit/:remoteVisitId", remoteVisits.delete);
};

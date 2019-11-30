module.exports = app => {
  const patients = require("../controllers/patient.controller.js");

  //These can all be accessed at http://159.65.238.119:3000/ROUTE while
  //the node server is running or http://localhost:3000/ROUTE when running locally
  // Create a new Patient
  app.post("/patients", patients.create);

  // Retrieve all Patients
  app.get("/patients", patients.findAll);

  // Retrieve a single Patient with patientId
  app.get("/patients/:patientId", patients.findOne);

  // Update a Patient with patientId
  app.put("/patients/:patientId", patients.update);

  // Delete a Patients with patientId
  app.delete("/patients/:patientId", patients.delete);
};

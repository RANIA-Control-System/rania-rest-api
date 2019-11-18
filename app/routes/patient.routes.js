module.exports = app => {
  const patients = require("../controllers/patient.controller.js");

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

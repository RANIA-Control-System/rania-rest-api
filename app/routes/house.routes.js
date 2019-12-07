module.exports = app => {
  const houses = require("../controllers/house.controller.js");

  //These can all be accessed at http://159.65.238.119:3000/ROUTE while
  //the node server is running or http://localhost:3000/ROUTE when running locally
  // Create a new House
  app.post("/houses", houses.create);

  // Retrieve House of a patient using patientId
  app.get("/houses/:patientId", houses.findAllForPatient);

  // Retrieve a single House with houseId
  app.get("/houses/:houseId", houses.findOne);

  // Update a House with houseId
  app.put("/houses/:houseId", houses.update);

  // Delete a House with houseId
  app.delete("/houses/:houseId", houses.delete);
};

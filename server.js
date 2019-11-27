const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    dbName: "RANIACS-ARATO"
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Example request, should show up at localhost:3000
app.get("/", (req, res) => {
  res.json({
    message: "This is an example request."
  });
});

require("./app/routes/patient.routes.js")(app);
require("./app/routes/remoteVisit.routes.js")(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Example request, should show up at localhost:3000
app.get("/", (req, res) => {
  res.json({
    message: "This is an example request."
  });
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

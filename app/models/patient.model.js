const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema(
  {
    name: {
      firstName: String,
      middleInitial: String,
      lastName: String
    },
    birthDate: String,
    phoneNumber: String,
    gender: String,
    maritalStatus: String
  },
  {
    collection: "patient"
  }
);

module.exports = mongoose.model("Patient", PatientSchema);

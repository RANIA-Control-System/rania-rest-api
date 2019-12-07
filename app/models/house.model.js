const mongoose = require("mongoose");
//Schema defined in team drive/MongoDB Atlas
const HouseSchema = mongoose.Schema(
  {
    houseId: mongoose.Schema.Types.ObjectId,
    addressLineOne: String,
    addressLineTwo: String,
    patientId: mongoose.Schema.Types.ObjectId,
    emergencyContacts: [
      {
        name: String,
        phone: String,
        relationship: String,
        resident: Boolean
      }
    ]
  },
  {
    collection: "houseInfo"
  }
);

module.exports = mongoose.model("HouseInfo", HouseSchema);

const mongoose = require("mongoose");
//Schema defined in team drive/MongoDB Atlas
const RemoteVisitSchema = mongoose.Schema(
  {
    patientId: Schema.Types.ObjectId,
    date: Date,
    startTime: String,
    length: String,
    doctor: String,
    type: String,
    formId: Schema.Types.ObjectId,
    notes: String
  },
  {
    collection: "remoteVisit"
  }
);

module.exports = mongoose.model("RemoteVisit", RemoteVisitSchema);

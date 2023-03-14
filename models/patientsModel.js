import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  patientName: String,
  age: Number,
  gender: String,
});

// module.exports = mongoose.model("Patient", patientSchema);

export default mongoose.models?.Patients || mongoose.model("Patients", patientSchema);

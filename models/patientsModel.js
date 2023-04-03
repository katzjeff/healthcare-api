import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  patientName: {type: String, required: true},
  age: {type: Number, required: true},
  gender: {type: String, required: true},
});

export default mongoose.models?.Patients || mongoose.model("Patients", patientSchema);

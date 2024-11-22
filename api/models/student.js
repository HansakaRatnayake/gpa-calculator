const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    gender: { type: String },
    date_of_birth: { type: Date },
    address: { type: String },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

module.exports = mongoose.model("Student", studentSchema);

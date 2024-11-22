const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

module.exports = mongoose.model("Teacher", teacherSchema);

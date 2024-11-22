const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    exam_id: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    marks_obtained: { type: Number, required: true },
    grade: { type: String, required: true },
    remarks: { type: String },
});

module.exports = mongoose.model("Result", resultSchema);

const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
    semester_name: { type: String, required: true },
});

module.exports = mongoose.model("Semester", semesterSchema);

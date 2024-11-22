const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password_hash: { type: String, required: true },
    role: { type: String, required: true },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

module.exports = mongoose.model("User", userSchema);

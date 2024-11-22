const { default: mongoose } = require("mongoose");


const examSchema = new mongoose.Schema({
    exam_name: { type: String, required: true },
    exam_date: { type: Date, required: true },
    semester_id: { type: mongoose.Schema.Types.ObjectId, ref: "Semester", required: true },
    class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
});

module.exports = mongoose.model("Exam", examSchema);

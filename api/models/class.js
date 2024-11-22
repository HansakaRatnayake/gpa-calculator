const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    classname: { type: String, required: true },
    classteacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
});

module.exports = mongoose.model("Class", classSchema);

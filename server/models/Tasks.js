const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    tasks: {type: String, required: true, maxLength:100},
});

module.exports = mongoose.model("AllTask", TaskSchema);
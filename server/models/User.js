const mongoose = require("mongoose");

const UserNameSchema = new mongoose.Schema({
    username: {type: String, required: true},
});

module.exports = mongoose.model("User", UserNameSchema);
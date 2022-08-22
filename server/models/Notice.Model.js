const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
    tasks: {type: String, required: true, maxLength:100},
    username :{type:mongoose.Schema.Types.ObjectId, ref: 'User',required:true},
     

},{ versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeSchema);
const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
    notice: {type: String, required: true, maxLength:100},
    user_Id :{type:mongoose.Schema.Types.ObjectId, ref: 'User',required:true},
     

},{ versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeSchema);
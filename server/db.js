const mongoose = require('mongoose');

const connect = ()=> {
    mongoose
    .connect("mongodb://localhost:27017/NoticeBoard")
    .then(()=>console.log("MongoDb Connected!!"))
    .catch((error)=>console.log(error))
}

module.exports = connect;
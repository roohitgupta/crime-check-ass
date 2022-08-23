const mongoose = require('mongoose');

const connect = ()=> {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("MongoDb Connected!!"))
    .catch((error)=>console.log(error))
}

module.exports = connect;
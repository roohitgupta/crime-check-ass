const express = require('express');
const mongoose = require('mongoose');
const { login, noticeTasks, getAllTasks } = require('./routes/addNotice');

const app = express();
const router = express.Router();
app.use(express.json());


app.use('/api', router);
router.post('/login', login);
router.post('/notices', noticeTasks);
router.get('/get-notices', getAllTasks);



mongoose
.connect("mongodb://localhost:27017/NoticeBoard")
.then(()=>console.log("MongoDb Connected!!"))
.catch((error)=>console.log(error))

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running on port 5000")
})
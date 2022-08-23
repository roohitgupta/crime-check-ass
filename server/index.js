const express = require('express');
const connect = require('./db');
const cors = require('cors');
const router = express.Router();
const { login, noticeTasks, getAllNotice } = require('./routes/addNotice');
const dotenv = require('dotenv');


const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.use('/api', router);
router.post('/login', login);
router.post('/notices', noticeTasks);
router.get('/get-notices', getAllNotice);


app.listen(process.env.PORT || 5000, async ()=>{
    try {
        await connect();
        console.log("Server is running on port 5000");
    } catch (error) {
        console.log(error);
    }
});
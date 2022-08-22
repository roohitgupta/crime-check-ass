const User = require("../models/User");



const login = async (req, res)=>{
    const newUser = new User({
        username: req.body.name,
    });
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        return res.status(201).json(savedUser); 
    } catch (error) {
        return res.status(500).json(error);
    }
}

const noticeTask = (req, res)=>{

   
    
}

module.exports = {
    login, noticeTask,
};

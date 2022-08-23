const User = require("../models/User.Model");
const Notice = require("../models/Notice.Model");


const login = async (req, res)=>{
    const newUser = new User({
        username: req.body.name,
    });
    try {
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser); 
    } catch (error) {
        return res.status(500).json(error);
    }
};

const noticeTasks = async (req, res)=>{
    
    const newNotice = new Notice({
        notice: req.body.text,
        user_Id: req.body.id
    });
    try {
        const savedNotice = await newNotice.save();
        return res.status(201).json(savedNotice);
        console.log(savedNotice)
    } catch (error) {
        return res.status(500).json(error);
    }    
};

const getAllNotice = async (req, res)=>{
    try {
        const getNotice = await Notice.find().populate("user_Id","username").sort( { createdAt: -1 }).lean().exec();
        return res.json(getNotice);
    
    } catch (error) {
        return res.json(error);
    }
       

}

module.exports = {
    login, noticeTasks, getAllNotice
};

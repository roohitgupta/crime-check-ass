const User = require("../models/User");
const AllTask = require("../models/Tasks");


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
    const newTasks = new AllTask({
        tasks: req.body.tasks,
    });
    try {
        const savedTasks = await newTasks.save();
        return res.status(201).json(savedTasks);
    } catch (error) {
        return res.status(500).json(error);
    }    
};

module.exports = {
    login, noticeTasks,
};

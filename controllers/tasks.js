const Task=require('../models/Task');
const getAllTasks=(req,res)=>{
    res.json('get all tasks')
}
const createTasks=async (req,res)=>{
    
    const task=await Task.create(req.body);
    res.status(201).json({task});
}
const getSingleTask=(req,res)=>{
    res.json({
        id:req.params.taskId,
    });
}
const updateTask=(req,res)=>{
    res.json('update tasks');
}
const deleteTasks=(req,res)=>{
    res.json('delete tasks');
}
module.exports={
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTasks
}
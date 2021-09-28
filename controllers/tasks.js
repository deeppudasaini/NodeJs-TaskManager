const Task=require('../models/Task');
const getAllTasks=async (req,res)=>{
    const tasks=await Task.find().then(tasks=>{
        res.json(tasks);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createTasks=async (req,res)=>{
    
    const task=await Task.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({task});
}
const getSingleTask=async (req,res)=>{
    const task=await Task.findById(req.params.taskId).then(task=>{
        res.json(task);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateTask=async (req,res)=>{
    const task=await Task.findByIdAndUpdate(req.params.taskId,req.body,{new:true}).then(task=>{
        res.json(task);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteTasks=async (req,res)=>{
    const task= await Task.findByIdAndDelete(req.params.taskId).then(task=>{
        res.json(task);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTasks
}

const getAllTasks=(req,res)=>{
    res.json('get all tasks')
}
const createTasks=(req,res)=>{
    res.json(req.body);
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
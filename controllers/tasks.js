
const getAllTasks=(req,res)=>{
    res.send('get all tasks')
}
const createTasks=(req,res)=>{
    res.send('create tasks');
}
const getSingleTask=(req,res)=>{
    res.send('get Single task');
}
const updateTask=(req,res)=>{
    res.send('update tasks');
}
const deleteTasks=(req,res)=>{
    res.send('delete tasks');
}
module.exports={
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTasks
}
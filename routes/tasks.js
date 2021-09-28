const express=require('express');
const {getAllTasks,createTasks,getSingleTask,updateTask,deleteTasks}=require('../controllers/tasks');
const router=express.Router();

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:taskId').get(getSingleTask).put(updateTask).delete(deleteTasks);
module.exports=router;
const express=require('express');
const {getAllTasks}=require('../controllers/tasks');
const router=express.Router();

router.route('/').get(getAllTasks);
router.route('/').post((req,res)=>{
    res.send('add Tasks');
    });
router.route('/:taskId').get((req,res)=>{
    res.send(`Single Tasks number `+req.params.taskId);
        });
router.route('/:taskId').put((req,res)=>{
    res.send(`Update Tasks number ${req.params.taskId}`);
        });
router.route('/:taskId').delete((req,res)=>{
    res.send(`Delete Tasks number ${taskId}`);
        }
    );
module.exports=router;